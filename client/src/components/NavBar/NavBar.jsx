import style from "./NavBar.module.css"


const NavBar = () => {
    return (
       <div>
            <ul>
                <li className={style.li1}><a href="/">Exit</a></li>
                <li className={style.li1}><a href="/home">Home</a></li>
                <li className={style.li1}><a href="/create">Create</a></li>
            </ul>
        </div>
    )}

export default NavBar;