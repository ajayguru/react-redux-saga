import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from "redux-mock-store";
import FlightList from "./FlightList";

const defaultState = {
    businessFlights: [{ "departure": "Ankara", "arrival": "Antalya", "departureTime": 1561627856, "arrivalTime": 1564410656 }],
    cheapFlights: [],
    loading: false,
    error: null
};

it('should render correctly <FlightList>', () => {
    const mockStore = configureStore();
    const store = mockStore({ flights: defaultState });
    const wrapper = mount(
        <Provider store={store}>
            <FlightList />
        </Provider>);
    expect(wrapper).toMatchSnapshot();
});
