import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import Routes from './Routes';
import TopNavBar from './components/TopNavBar';

const App = () => {
    return (
      <div id="container">
        <div id='top-navbar'>
          <Route
            render={props => (
              <TopNavBar
                {...props}
              />
            )}
          />
        </div>
        <Routes />
      </div>
    );
};

export default App;
