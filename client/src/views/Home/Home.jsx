import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, setLoading} from "../../Redux/actions";
import style from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(getAllCountries()).then(() => dispatch(setLoading(false)));
      }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [orden, setOrden] = useState('');

    return (
        <div className={style.mainContainer}> 
        <NavBar />
        <div> 
            <Filters setCurrentPage={setCurrentPage} setOrden={setOrden}/>
            <SearchBar/>
        </div>
        <CardsContainer currentPage={currentPage} setCurrentPage={setCurrentPage} orden={orden}/>
        <Footer/>
        </div>
    )
}

export default Home;