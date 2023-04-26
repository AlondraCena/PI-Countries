import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, } from "../../Redux/actions";
import { setLoading } from "../../Redux/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(getAllCountries()).then(() => dispatch(setLoading(false)));
      }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [orden, setOrden] = useState('');

    return (
        <> 
        <NavBar />
        <div> 
            <Filters setCurrentPage={setCurrentPage} setOrden={setOrden}/>
            <SearchBar/>
        </div>
        <CardsContainer currentPage={currentPage} setCurrentPage={setCurrentPage} orden={orden}/>
        <Footer/>
        </>
    )
}

export default Home;