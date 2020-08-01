export const types = {
    GET_CHEAP_FLIGHTS_REQUEST: 'GET_CHEAP_FLIGHTS_REQUEST',
    GET_CHEAP_FLIGHTS_SUCCESS: 'GET_CHEAP_FLIGHTS_SUCCESS',
    GET_CHEAP_FLIGHTS_FAILURE: 'GET_CHEAP_FLIGHTS_FAILURE',
    GET_BUSINESS_FLIGHTS_REQUEST: 'GET_BUSINESS_FLIGHTS_REQUEST',
    GET_BUSINESS_FLIGHTS_SUCCESS: 'GET_BUSINESS_FLIGHTS_SUCCESS',
    GET_BUSINESS_FLIGHTS_FAILURE: 'GET_BUSINESS_FLIGHTS_FAILURE',
    SET_BUSINESS_FLIGHT_REQUEST: 'SET_BUSINESS_FLIGHT_REQUEST',
    SET_BUSINESS_FLIGHT_SUCCESS: 'SET_BUSINESS_FLIGHT_SUCCESS',
    SET_BUSINESS_FLIGHT_FAILURE: 'SET_BUSINESS_FLIGHT_FAILURE',
    SET_CHEAP_FLIGHT_REQUEST: 'SET_CHEAP_FLIGHT_REQUEST',
    SET_CHEAP_FLIGHT_SUCCESS: 'SET_CHEAP_FLIGHT_SUCCESS',
    SET_CHEAP_FLIGHT_FAILURE: 'SET_CHEAP_FLIGHT_FAILURE'
};


// //////////////////////////////////////////////////////////////
// Reducer
// //////////////////////////////////////////////////////////////
const defaultState = {
    businessFlights: [],
    cheapFlights: [],
    loading: false,
    error: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_CHEAP_FLIGHTS_REQUEST:
            return {
                ...state,
                cheapFlights: defaultState.cheapFlights,
                loading: true,
                error: null
            };
        case types.GET_CHEAP_FLIGHTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.GET_CHEAP_FLIGHTS_SUCCESS:
            return {
                ...state,
                cheapFlights: action.flights,
                loading: false,
                error: null
            };
        case types.GET_BUSINESS_FLIGHTS_REQUEST:
            return {
                ...state,
                businessFlights: defaultState.businessFlights,
                loading: true,
                error: null
            };
        case types.GET_BUSINESS_FLIGHTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.GET_BUSINESS_FLIGHTS_SUCCESS:
            return {
                ...state,
                businessFlights: action.flights,
                loading: false,
                error: null
            };
        case types.SET_CHEAP_FLIGHT_REQUEST:
        case types.SET_BUSINESS_FLIGHT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.SET_BUSINESS_FLIGHT_FAILURE:
        case types.SET_CHEAP_FLIGHT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.SET_BUSINESS_FLIGHT_SUCCESS:
            return {
                ...state,
                businessFlights: [...state.businessFlights, action.flight],
                loading: false,
                error: null
            };
        case types.SET_CHEAP_FLIGHT_SUCCESS:
            return {
                ...state,
                cheapFlights: [...state.cheapFlights, action.flight],
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
