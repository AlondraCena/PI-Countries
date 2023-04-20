import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, } from "../../Redux/actions";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])
    
    


    return (
        <> 
        <NavBar />
        <div> 
            <SearchBar/>
            
        </div>

        <CardsContainer />
        </>
    )
}

export default Home;