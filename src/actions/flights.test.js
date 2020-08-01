import{ actions } from './flights';
import { types } from '../reducers/flights';

describe('Flights Actions', () => {
    it('should create an action with correct type', () => {
       const expectedAction = {
               type: types.GET_CHEAP_FLIGHTS_REQUEST
              };
       expect(actions.getCheapFlight()).toEqual(expectedAction);
   });
 });