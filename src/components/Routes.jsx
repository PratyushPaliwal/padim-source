import React from 'react';
import { Router, Redirect } from "@reach/router";
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Router>
      <Redirect from="/" to="/home" noThrow />
        <Home path="/home"></Home>
    </Router>
  );
};

export default Routes;