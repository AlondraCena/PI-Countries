import React from "react";
import style from "./Pagination.module.css"

export default function Pagination ({countriesPerPage, countries, pagination, currentPage }){
    const pageNumbers = []

    for (let i=0;i<=Math.ceil(countries/countriesPerPage) -1; i++){
        pageNumbers.push(i +1)
    }
    
    const firstPage = () => {
        pagination(pageNumbers[0]);
    }
    
    const prevPage = () => {
        if (currentPage > 1) {
          pagination(currentPage - 1);
        }
      };
    
    const lastPage = () => {
        pagination(pageNumbers[pageNumbers.length - 1]);
    }

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
          pagination(currentPage + 1);
        }
      };
    
      const getPageNumbersToShow = () => {
        const range = 3;
        const delta = range - 1;
        const left = currentPage - Math.floor(delta / 2);
        const right = currentPage + Math.ceil(delta / 2);
        const pages = [];

            for (let i = 1; i <= pageNumbers.length; i++) {
                if (i >= left && i <= right) 
                pages.push(i);
                }
            
            return pages
        };
    
    return (
        <nav>
            <div className={style.paginationContainer}>
            <ul className={style.pagination}>
                    <li key="doubleLeft"><a onClick={firstPage}  className={style.doubleleft}>&#171;</a></li>
                    <li key="Left"><a onClick={prevPage} className={style.left}>&lt;</a></li>
                    {getPageNumbersToShow().map(number => (
                    <li key={number}>
                    <a className={`${number === currentPage ? style.active : ''}`}
                        onClick={() => pagination(number) }>{number}</a>
                    </li>
                    ))}
                    <li key="Right"><a onClick={nextPage} className={style.right}>&gt;</a></li>
                    <li key="DoubleRight"><a onClick={lastPage}  className={style.doubleright}>&#187;</a></li>
            </ul>
            </div>
        </nav>
    )
} 
