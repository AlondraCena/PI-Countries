import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, } from "../../Redux/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])

    return (
        <> 
        <NavBar />
        <div> 
            <h1>vista home</h1>
        </div>
        <CardsContainer />
        </>
    )
}

export default Home;