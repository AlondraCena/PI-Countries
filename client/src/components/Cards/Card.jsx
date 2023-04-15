import style from "./Cards.module.css"
import { useHistory } from "react-router-dom";


const Card = (props) => {
    
    const history = useHistory();
    const handlerRoute = () => history.push(`/detail/${props.id}`);
    
    return (
        <div className={style.main_container} onClick={handlerRoute}> 
            <div className={style.image_container}>
                <img className={style.img} src={props.image} alt={`imagen de: ${props.name}`}/>
            </div>
            <h2>{props.name}</h2>
            <div className={style.continent}>Continent: {props.continent}</div>
            
        </div>
    )
}

export default Card;