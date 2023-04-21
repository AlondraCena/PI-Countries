import Card from "../Cards/Card";
import Pagination from "../../components/Pagination/Pagination";
import style from "./CardsContainer.module.css"
import {useSelector} from "react-redux"
import { useState } from "react";

const CardsContainer = ({ currentPage, setCurrentPage, orden }) => {
    
    const countries = useSelector(state =>state.countries)
    //const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
       
        <div className={style.center} >
        <Pagination
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                pagination={pagination}
            />
            </div>
         
        <div className={style.container}> 
        {currentCountries.map(countries =>{
            return <Card
                id= {countries.id}
                name={countries.name}
                image= {countries.image}
                continent= {countries.continent}
                population= {countries.population}
                key={countries.id}
            />
        })}
         
        </div>
        </div>
        
    )
}

export default CardsContainer;