import { GET_ALL_COUNTRIES, 
        SHOW_COUNTRY_DETAILS,
        GET_COUNTRY_BY_NAME,
        GET_ALL_ACTIVITIES,
        SUBMIT_FORM
    } from "./actionTypes"

const initialState = {
    countries:[],
    details: [],
    activities: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state, countries: action.payload};

        case SHOW_COUNTRY_DETAILS:
            return {...state, details: action.payload};

        case GET_COUNTRY_BY_NAME:
            return {...state, countries: action.payload};

        case GET_ALL_ACTIVITIES:
            return {...state, activities: action.payload};

        case SUBMIT_FORM:
            return {
                ...state,
                name: action.payload.name,
                difficulty: action.payload.difficulty,
                duration: action.payload.duration,
                season: action.payload.season
                };

    default: return { ...state };
    }
};

export default rootReducer