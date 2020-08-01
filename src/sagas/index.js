import {
  takeLatest,
  call,
  put,
  all
} from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../reducers/flights';

// function that returns api response
const getCall = (fetchUrl) => axios({
    method: 'get',
    url: fetchUrl
  });

  export const fetchCheapFlights = function* () {
  try {
    const response = yield call(getCall, 'https://tokigames-challenge.herokuapp.com/api/flights/cheap');
    const flights = response.data.data;

    // dispatch a success action to the store with flight list
    yield put({ type: types.GET_CHEAP_FLIGHTS_SUCCESS, flights });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_CHEAP_FLIGHTS_FAILURE, error });
  }
};

export const watchGetCheapFlight = function* () {
  yield takeLatest(types.GET_CHEAP_FLIGHTS_REQUEST, fetchCheapFlights);
};

export const fetchBusinessFlights = function* () {
  try {
    const response = yield call(getCall, 'https://tokigames-challenge.herokuapp.com/api/flights/business');
    const flights = response.data.data;

    // dispatch a success action to the store with flight list
    yield put({ type: types.GET_BUSINESS_FLIGHTS_SUCCESS, flights });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_BUSINESS_FLIGHTS_FAILURE, error });
  }
};

export const watchGetBusinessFlight = function* () {
  yield takeLatest(types.GET_BUSINESS_FLIGHTS_REQUEST, fetchBusinessFlights);
};

const setBusinessFlight = function* (flightData) {
  if (flightData) {
  yield put({ type: types.SET_BUSINESS_FLIGHT_SUCCESS, flight: flightData });
  } else {
    yield put({ type: types.SET_BUSINESS_FLIGHT_FAILURE, error: 'Error while saving' });
  }
};

const watchSetBusinessFlight = function* () {
  yield takeLatest('SET_BUSINESS_FLIGHT_REQUEST', setBusinessFlight);
};

const setCheapFlight = function* (flightData) {
  if (flightData) {
    yield put({ type: types.SET_CHEAP_FLIGHT_SUCCESS, flight: flightData });
  } else {
    yield put({ type: types.SET_CHEAP_FLIGHT_FAILURE, error: 'Error while saving' });
  }
};

const watchSetCheapFlight = function* () {
  yield takeLatest('SET_CHEAP_FLIGHT_REQUEST', setCheapFlight);
};

export default function* rootSaga() {
  yield all([
    watchGetCheapFlight(),
    watchGetBusinessFlight(),
    watchSetBusinessFlight(),
    watchSetCheapFlight()
  ]);
}
