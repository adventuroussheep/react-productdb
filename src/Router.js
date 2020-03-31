import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Routes from './server/routes';

class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
              {/* Route for homepage in Components */}
            <Route path="/" component={HomePage} />
            <Routes/>
              {/* Route for 404 page in Components */}
            {/* <Route component={Page404} /> */}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Router;
