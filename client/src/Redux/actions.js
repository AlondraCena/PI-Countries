import axios from "axios";
import {
    GET_ALL_COUNTRIES,
    SHOW_COUNTRY_DETAILS
} from './actionTypes';

export const getAllCountries= () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/countries");
        const data = res.data;
        dispatch({ type: GET_ALL_COUNTRIES, payload: data });
    }
};

export const showCountryDetails= (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/countries/${id}`);
            const data = res.data;
            dispatch({ type: SHOW_COUNTRY_DETAILS, payload: data });
        } catch (error) {
            console.log(error);
        }
    }
};
