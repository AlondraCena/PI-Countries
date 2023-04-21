import { GET_ALL_COUNTRIES, 
        SHOW_COUNTRY_DETAILS,
        GET_COUNTRY_BY_NAME,
        GET_ALL_ACTIVITIES,
        ORDER_BY_NAME,
        ORDER_BY_POPULATION,
        FILTER_BY_CONTINENT,
        SUBMIT_FORM
    } from "./actionTypes"

const initialState = {
    countries:[],
    details: [],
    activities: [],
    allCountries: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state, countries: action.payload, allCountries: action.payload};

        case SHOW_COUNTRY_DETAILS:
            return {...state, details: action.payload};

        case GET_COUNTRY_BY_NAME:
            return {...state, countries: action.payload};

        case GET_ALL_ACTIVITIES:
            return {...state, activities: action.payload};

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            const continentFiltered = action.payload === "All" ? allCountries : allCountries.filter(e => e.continent === action.payload)
            return {...state, countries: continentFiltered};
        
        case ORDER_BY_NAME:
            let sortedArray = action.payload === "asc" ?
                state.countries.sort(function(a, b){
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                }) :
                state.countries.sort(function(a, b){
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0
                }) 
                return {
                    ...state,
                    countries: sortedArray
                }

        case ORDER_BY_POPULATION:
            let sortedArrayP = action.payload === "desc" ?
                state.countries.sort(function(a, b){
                    if (a.population > b.population) {
                        return 1
                    }
                    if (b.population > a.population) {
                        return -1
                    }
                    return 0
                }) :
                state.countries.sort(function(a, b){
                    if (a.population > b.population) {
                        return -1
                    }
                    if (b.population > a.population) {
                        return 1
                    }
                    return 0
                }) 
                return {
                    ...state,
                    countries: sortedArrayP
                }
        
        
        // case SUBMIT_FORM:
        //     return {
        //         ...state,
        //         name: action.payload.name,
        //         difficulty: action.payload.difficulty,
        //         duration: action.payload.duration,
        //         season: action.payload.season
        //         };

    default: return { ...state };
    }
};

export default rootReducer