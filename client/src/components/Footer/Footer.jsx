import style from "./Footer.module.css"


const Footer = () => {
    return (
        <div className={style.container}>
        <footer>
            <div className={style.message}>
              <p className={style.text}>Developed with <span className={style.white}>❤</span> for Henry's individual project by Alondra Cena</p>
            </div>
        </footer>
        </div>
    )}

export default Footer;