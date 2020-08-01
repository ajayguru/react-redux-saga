import React from 'react';
import { shallow, mount } from 'enzyme';
import FlightList from './FlightList';

const props = {
    cheapFlights: [], businessFlights: [], getCheapFlight: () => {}, getBusinessFlight: () => {}
};

describe('FlightList component', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<FlightList {...props} />);
    });

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
