import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import FlightList from './containers/FlightList';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={(props) => (<FlightList {...props} />)}
    />
        {/* To-Do:- Error-page/ Page not found */}
  </Switch>
);

export default withRouter(Routes);
