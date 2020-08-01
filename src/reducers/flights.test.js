import reducer, { types } from "./flights";

const defaultState = {
  businessFlights: [],
  cheapFlights: [],
  loading: false,
  error: null
};

describe('Flight Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it(`should handle "${types.GET_CHEAP_FLIGHTS_REQUEST}" action`, () => {
    expect(reducer({}, { type: types.GET_CHEAP_FLIGHTS_REQUEST })).
      toEqual({ loading: true, cheapFlights: [], error: null });
  });

  it(`should handle "${types.GET_BUSINESS_FLIGHTS_SUCCESS}" action`, () => {
    const mockData = [{ "departure": "Ankara", "arrival": "Antalya", "departureTime": 1561627856, "arrivalTime": 1564410656 }];
    expect(reducer(defaultState, { type: types.GET_BUSINESS_FLIGHTS_SUCCESS, flights: mockData }))
      .toEqual({ businessFlights: mockData, loading: false, error: null, cheapFlights: [] });
  });
});