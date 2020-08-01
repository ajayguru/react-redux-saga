import { types } from '../reducers/flights';

const getCheapFlight = () => ({ type: types.GET_CHEAP_FLIGHTS_REQUEST });
const getBusinessFlight = () => ({ type: types.GET_BUSINESS_FLIGHTS_REQUEST });
const settCheapFlight = (flightData) => ({ type: types.SET_CHEAP_FLIGHT_REQUEST, flightData });
const setBusinessFlight = (flightData) => ({ type: types.SET_BUSINESS_FLIGHT_REQUEST, flightData });

// const getCheapFlight = (dispatch) => (dispatch(getCheapFlightRequest()));

export const actions = {
    getCheapFlight,
    getBusinessFlight,
    settCheapFlight,
    setBusinessFlight
};
