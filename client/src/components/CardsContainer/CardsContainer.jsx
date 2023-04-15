import Card from "../Cards/Card";
import style from "./CardsContainer.module.css"
import {useSelector} from "react-redux"

const CardsContainer = () => {
    // const countries = [
    //     {
    //         "id": "ATF",
    //         "name": "French Southern and Antarctic Lands",
    //         "image": "https://flagcdn.com/tf.svg",
    //         "continent": "Antarctica",
    //         "subregion": null,
    //         "capital": "Port-aux-Français",
    //         "area": 7747,
    //         "population": 400,
    //         "activities": []
    //     },
    //     {
    //         "id": "COL",
    //         "name": "Colombia",
    //         "image": "https://flagcdn.com/co.svg",
    //         "continent": "South America",
    //         "subregion": "South America",
    //         "capital": "Bogotá",
    //         "area": 1141748,
    //         "population": 50882884,
    //         "activities": []
    //     },
    //     {
    //         "id": "VEN",
    //         "name": "Venezuela",
    //         "image": "https://flagcdn.com/ve.svg",
    //         "continent": "South America",
    //         "subregion": "South America",
    //         "capital": "Caracas",
    //         "area": 916445,
    //         "population": 28435943,
    //         "activities": []
    //     },
    //     {
    //         "id": "TJK",
    //         "name": "Tajikistan",
    //         "image": "https://flagcdn.com/tj.svg",
    //         "continent": "Asia",
    //         "subregion": "Central Asia",
    //         "capital": "Dushanbe",
    //         "area": 143100,
    //         "population": 9537642,
    //         "activities": []
    //     },
    //     {
    //         "id": "IRQ",
    //         "name": "Iraq",
    //         "image": "https://flagcdn.com/iq.svg",
    //         "continent": "Asia",
    //         "subregion": "Western Asia",
    //         "capital": "Baghdad",
    //         "area": 438317,
    //         "population": 40222503,
    //         "activities": []
    //     },
    //     {
    //         "id": "CIV",
    //         "name": "Ivory Coast",
    //         "image": "https://flagcdn.com/ci.svg",
    //         "continent": "Africa",
    //         "subregion": "Western Africa",
    //         "capital": "Yamoussoukro",
    //         "area": 322463,
    //         "population": 26378275,
    //         "activities": []
    //     }]
    
    
    const countries = useSelector(state =>state.countries)

    return (
        <div className={style.container}> 
        {countries.map(countries =>{
            return <Card
                id= {countries.id}
                name={countries.name}
                image= {countries.image}
                continent= {countries.continent}
            />
        })}
         
        </div>
        
    )
}

export default CardsContainer;