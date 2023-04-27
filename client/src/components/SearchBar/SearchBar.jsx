import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../Redux/actions";
import style from "../SearchBar/SearchBar.module.css";

export default function SearchBar() {
    const dispatch = useDispatch();

    const [searchCountry, setSearchCountry] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setSearchCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountryByName(searchCountry));
    }

    return(
        <form onSubmit={handleSubmit} className={style.barContainer}>
        <div className={style.searchbar_container}>
        <div className={style.searchbar_wrapper}>
        <input className={style.searchbar} type="text" value={searchCountry} onChange={handleInput} placeholder="Search country..."/>
        <button className={style.searchbar_button} type="submit">SEARCH</button>
        </div>
        </div>
    </form>
    )
}