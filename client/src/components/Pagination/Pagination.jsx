import React from "react";
import style from "./Pagination.module.css"

export default function Pagination ({countriesPerPage, countries, pagination, currentPage }){
    const pageNumbers = []

    for (let i=0;i<=Math.ceil(countries/countriesPerPage) -1; i++){
        pageNumbers.push(i +1)
    }

    return (
        <nav>
            <div className={style.paginationContainer}>
            <ul className={style.pagination}>
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li key={number}>
                    <a className={`${number === currentPage ? style.active : ''}`}
                        onClick={() => pagination(number) }>{number}</a>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
} 
