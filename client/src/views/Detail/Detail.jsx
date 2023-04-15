import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showCountryDetails } from "../../Redux/actions";
import style from "./Detail.module.css";
import NavBar from "../../components/NavBar/NavBar";

const Detail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    
    const details = useSelector((state) => state.details)
    console.log(details)
   
    useEffect(() => {
        dispatch(showCountryDetails(id));
    }, [dispatch, id]);

   
    
    // if (details[0]) { //una vez ya se hayan traido los datos renderizalos
    //     nameC = details[0].name;
    //     imageC = details[0].image;
    //     continentC = details[0].continent;
    //     subregionC = details[0].subregion;
    //     capitalC = details[0].capital;
    //     areaC = details[0].area;
    //     populationC = details[0].population;

    //     if (details[0].activities[0]) {
    //         activitiesC = [...details[0].activities]
    //     }
        
    //     if (details[0].activities[0].name) {
    //         activitiesC = details[0].activities.map(act => act.name)
    //     }
    // };

    let nameC, imageC, continentC, subregionC, capitalC, areaC, populationC, activitiesC = [];
  
  if (details) {
    nameC = details.name;
    imageC = details.image;
    continentC = details.continent;
    subregionC = details.subregion;
    capitalC = details.capital;
    areaC = details.area;
    populationC = details.population;

    if (details.activities && details.activities.length > 0) {
      activitiesC = details.activities.map((act) => act.name);
    }
  }

    console.log(nameC)
    
    return(
        <>
        <NavBar />
        <div className={`${style.main_container}`}>
            
            <div className={`${style.sub_container}`}>
                    <div className={`${style.container_elements}`}>

                        <div className={`${style.image_container}`}>
                            <img src={imageC} alt={`imagen de ${imageC}`}/>
                        </div>
                        
                        <div className={`${style.right_container}`}>
                            <h1>{nameC}</h1>
                            <h3>Continent: {continentC}</h3>
                            <h3>Subregion: {subregionC}</h3>
                            <h3>Capital: {capitalC}</h3>
                            <h3>Area: {areaC}</h3>
                            <h3>Population: {populationC}</h3>
                            <div>
                                <h3>Activities:</h3>
                                <ul className={`${style.list_container}`}>
                                    {activitiesC}
                                </ul>
                            </div>
                        </div>   
                </div>
            </div>
        </div>
        </> 
    )
}


export default Detail;