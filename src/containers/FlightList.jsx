import { connect } from 'react-redux';
import { actions as flightActions } from '../actions/flights';
import FlightList from '../components/FlightList';

const mapStateToProps = (state) => {
    const { flights } = state;
    return {
        cheapFlights: flights.cheapFlights,
        businessFlights: flights.businessFlights,
        loading: flights.loading,
        error: flights.error
    };
};

const mapDispatchToProps = dispatch => ({
    getCheapFlight: () => dispatch(flightActions.getCheapFlight()),
    getBusinessFlight: () => dispatch(flightActions.getBusinessFlight()),
    setCheapFlight: flightData => dispatch(flightActions.setCheapFlight(flightData)),
    setBusinessFlight: flightData => dispatch(flightActions.setBusinessFlight(flightData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
