import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from 'actions'
import indexRoutes from "routes/index.jsx";

var hist = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>

    )
  }
}

export default connect(null, actions)(App);
