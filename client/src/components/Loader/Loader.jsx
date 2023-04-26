import loader from "./loader.gif"; 
import style from "./Loader.module.css"
import {useSelector } from "react-redux";
import React from 'react';


const Loader = () => {
    
    return(
       <div className={style.loaderContainer}>
            <div className={style.loader}>
                <img className={style.spinner} src={loader} alt="loader" />
            </div> 
        </div>
    )
}

export default Loader;