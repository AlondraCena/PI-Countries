import axios from "axios";
import {
    GET_ALL_COUNTRIES,
    SHOW_COUNTRY_DETAILS,
    GET_COUNTRY_BY_NAME,
    GET_ALL_ACTIVITIES,
    SUBMIT_FORM
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

export function getCountryByName(payload) {
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/countries/search?name=${payload}`)
            const data = res.data
            return dispatch ({type: GET_COUNTRY_BY_NAME, payload: data})
        } catch (error) {
            console.log(error);
        }
    }
};

export const getAllActivities = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/activities");
        const data = res.data;
        dispatch({ type: GET_ALL_ACTIVITIES, payload: data });
    }   
};

export function postActivity(payload) {
    return async (dispatch) => {
        const res = await axios.post("http://localhost:3001/activities", payload);
        dispatch({ type: SUBMIT_FORM, payload: res.data });
    }}
