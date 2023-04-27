import style from "./Form.module.css"
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllCountries } from "../../Redux/actions";
import { useHistory } from "react-router-dom";
import axios from "axios";


const stringRegExp = /^[a-zA-Z]{1,30}$/;
const durationRegExp = /^((?:[0-9]|1[0-9]|2[0-3])(?:\.\d{1,2})?|24(?:\.00?)?)$/

const validate = (form) => {
    let errors = {}
    if(!form.name) {
        errors.name = "*Name is required"
    }
    else if(!stringRegExp.test(form.name)){
        errors.name = "*Invalid name, it should not contain numbers"
    }
    if(!form.difficulty) {
        errors.difficulty = "*You should choose an option"
    }
    if(!durationRegExp.test(form.duration)){
        errors.duration = "*Invalid duration, specify the duration with a number between 0 and 24. It can be a decimal number as 0.30(half an hour)"
    }
    if(form.season.length === 0) {
        errors.season = "*You should choose an option"
    }
    if(form.countries.length === 0) {
        errors.countries = "*You should choose at least one country"
    }
    return errors
}

const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    
        const [button, setButton] = useState(true);
        const [form, setForm] = useState({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            countries: []
        });
    
        const [errors, setErrors] = useState({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            countries: []
        });
       
        const handleChange = (e) => {
            const property = e.target.name;
            const value = e.target.value
            
            validate({...form, [property]:value})
            setForm({...form, [property]:value})   
        };

        const handleSelect = (e) => {
            const selected = e.target.value;
                if (!form.countries.includes(selected)) {
             setForm({
                 ...form,
                 countries: [...form.countries, selected]
             })
         }
        };
        
        const handleDelete = (el) => {
            const updatedForm = {
                ...form,
                countries: form.countries.filter(act => act !== el)
            };
            setForm(updatedForm);
            setErrors(validate(updatedForm));
        };

        useEffect(()=>{
            setErrors(validate(form));
        }, [form]); 

        useEffect(()=>{
            if (form.name.length > 0 && form.difficulty.length > 0 && form.season.length > 0 && form.countries.length > 0) setButton(false) 
            else setButton(true)
        }, [form, setButton]);
        
        const handleSubmit = (e) => {
            e.preventDefault();
            axios
            .post("http://localhost:3001/activities/", form)
            .then(alert("The new activity was added successfully"))
            .catch(err => {
                console.log(err.response.data);
                alert(err);})
        };
    
        const history = useHistory();
        const handlerRoute = () => history.push("/home");
       
    
        const difficulty = [1, 2, 3, 4, 5];
        
    return(
        <div className={style.main_wrapper}>
        <div className={style.container}>
            <h1 className={style.main_title}>Create an activity</h1>
            <form className={`${style.form}`} onSubmit={handleSubmit}>
            
                <div className={style.input_container}>
                    <input className={style.input_name} type="text" value={form.name} name="name" placeholder="Name..." onChange={handleChange}/>
                </div>
                        <div className={style.error_form}>{errors.name && <p>{errors.name}</p>}</div> {/*mesaje ed error de nombre*/}

                <div className={style.difficulty_container} value={form.difficulty} name="difficulty" onChange={handleChange}>
                    <label >Choose difficulty:</label>
                    {difficulty.map(option => (
                        <div key={option}>
                       <input type="radio" name="difficulty" value={option} id={option}     />
                       <label>{option}</label>
                       </div>
                    ))}
                   </div>
                        <div className={style.error_form}>{errors.difficulty && <p>{errors.difficulty}</p>}</div> {/*mesaje ed error de nombre*/}
                
                <div name="duration" value={form.duration} onChange={handleChange}>
                    <label>How long does the activity last?</label>
                    <input type="text" name="duration" value={form.duration} placeholder="HH.mm"/>
                    </div>
                        <div className={style.error_form}>{errors.duration && <p>{errors.duration}</p>}</div> {/*mesaje ed error de nombre*/}

                <div className={style.input_container} name="season" value={form.season} >
                    <label>Choose season:</label>
                       <input type="radio" name="season" value="Summer" onChange={handleChange}/>
                       <label>Summer</label>
                       <input type="radio" name="season" value="Autumn" onChange={handleChange}/>
                       <label>Autumn</label>
                       <input type="radio" name="season" value="Winter" onChange={handleChange}/>
                       <label>Winter</label>
                       <input type="radio" name="season" value="Spring" onChange={handleChange}/>
                       <label>Spring</label>
                       </div>
                        <div className={style.error_form}>{errors.season && <p>{errors.season}</p>}</div> {/*mesaje ed error de nombre*/}
                
                <div className={""}>
                        <select className={style.select_activities} onChange={handleSelect}>
                            <option disabled selected>Countries</option>
                            {countries.map(c => (                    
                                <option value={c.name} key={c.name+Math.random()} className={style.option_activity}>{c.name}</option> //key de elementos de temperamentos, eliminar el repetido reserved
                                ))}
                        </select>
                    </div>

                    <div className={style.container_activities}>
                        {form.countries.map(el => 
                        <div className={style.element_activity} key={el} onClick={() => handleDelete(el)}>
                            <p>{`${el}`}</p>
                        </div>    
                        )}
                    </div>
                    <div className={style.error_form}>{errors.countries && <p>{errors.countries}</p>}</div>

                <div className={style.container_button_add}>
                    <button className={style.button_add} disabled={button} type="submit" >SUBMIT</button>
                </div>
            </form>
            <div className={style.container_button_home}>
            <button className= {style.homeButton} onClick={handlerRoute}><span>Home</span></button>
            </div>
        </div>
        
    </div>
    )
}

export default Form;
