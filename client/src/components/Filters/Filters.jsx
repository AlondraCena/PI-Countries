import style from "./Filters.module.css"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux";
import { filterCountriesByContinent, orderByName, orderByPopulation } from "../../Redux/actions";


const Filters = ({ setCurrentPage, setOrden }) => {
    const dispatch = useDispatch();
    

    function handleSortByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordered ${e.target.value}`)
    };

    function handleSortByPopulation(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordered ${e.target.value}`)
    };
    function handleFilterContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
    };

return(
<div>
                <select onChange={e => handleSortByName(e)}>
                    <option disabled selected>Order</option>
                    <option value= "asc">A to Z</option>
                    <option value= "desc">Z to A</option>
                </select>
                <select onChange={e => handleSortByPopulation(e)}>
                    <option disabled selected>Population</option>
                    <option value= "asc">More to less</option>
                    <option value= "desc">Less to more</option>
                </select>
                <select onChange={e => handleFilterContinent(e)}>
                    <option disabled selected>Continents</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Europe">Europe</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select>
                    <option disabled selected>Activities</option>
                       
                </select>
            </div>
)
}

export default Filters;