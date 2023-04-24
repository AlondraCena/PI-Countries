import style from "./Landing.module.css"
import { useHistory } from "react-router-dom";
import React from "react";
import africa from "./africa.mp4";

import landing2 from "./landing2.png"

const Landing = () => {
    const history = useHistory();
    const handlerRoute = () => history.push("/home");

    return (
        <main className={style.landing}> 
        <video className={style.video} src={africa} autoPlay loop muted/>
        <section className={style.text_section}>
        <div className={style.text_container}>
            <h1 className={style.title1}>Globa<span className={style.title2}>List</span></h1>
            <h2 className={style.text1}>See the countries of the world and their activities and plan your next adventure</h2>
        </div>
        <button className= {style.Landingbutton} onClick={handlerRoute}><span>Log in</span></button>
        </section>
       
</main>
    )
}

export default Landing;