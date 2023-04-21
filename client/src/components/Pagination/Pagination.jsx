import React from "react";
import style from "./Pagination.module.css"

export default function Pagination ({countriesPerPage, countries, pagination}){
    const pageNumbers = []

    for (let i=0;i<=Math.ceil(countries/countriesPerPage); i++){
        pageNumbers.push(i +1)
    }

    return (
        <nav>
            <div >
            <ul className={style.pagination}>
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li className={style.list} key={number}>
                    <a onClick={() => pagination(number) }>{number}</a>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}