import { put, takeLatest } from 'redux-saga/effects';
import { fetchBusinessFlights, fetchCheapFlights, watchGetCheapFlight } from './index';
import { types } from '../reducers/flights';

describe('Flight SAGAS', () => {
    it(`should dispatch action ${types.GET_CHEAP_FLIGHTS_REQUEST}`, () => {
        const generator = watchGetCheapFlight();
        expect(generator.next().value)
            .toEqual(takeLatest(types.GET_CHEAP_FLIGHTS_REQUEST, fetchCheapFlights));
        expect(generator.next().done).toBeTruthy();
    });

    it(`should dispatch action "${types.GET_BUSINESS_FLIGHTS_SUCCESS}" with result from fetch Flight API`, () => {
        const mockData = { data: { data: [{ "departure": "Ankara", "arrival": "Antalya", "departureTime": 1561627856, "arrivalTime": 1564410656 }] } };
        const generator = fetchBusinessFlights();
        generator.next();
        expect(generator.next(mockData).value)
            .toEqual(put({ type: types.GET_BUSINESS_FLIGHTS_SUCCESS, flights: mockData.data.data }));
        expect(generator.next().done).toBeTruthy();
    });
});