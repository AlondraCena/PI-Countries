import style from "./NavBar.module.css"


const NavBar = () => {
    return (
       <div className={style.NavContainer}>
            <ul>
                <li className={style.li2}><h1 className={style.title1}>Globa<span className={style.title2}>List</span></h1></li>
                <li className={style.li1}><a href="/">Exit</a></li>
                <li className={style.li1}><a href="/home">Home</a></li>
                <li className={style.li1}><a href="/create">Create</a></li>
            </ul>
        </div>
    )}

export default NavBar;