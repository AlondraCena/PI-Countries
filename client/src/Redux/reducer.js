import { GET_ALL_COUNTRIES, 
        SHOW_COUNTRY_DETAILS
    } from "./actionTypes"

const initialState = {
    countries:[],
    details: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state, countries: action.payload};
        case SHOW_COUNTRY_DETAILS:
            return {...state, details: action.payload};

    default: return { ...state };
    }
};

export default rootReducer