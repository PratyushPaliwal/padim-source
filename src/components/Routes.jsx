import React from 'react';
import { Router, Redirect } from "@reach/router";
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Router>
        <Home path="/padim-source"></Home>
    </Router>
  );
};

export default Routes;