import React, { Component } from 'react';
import './App.css';

import Signup from './Signup';
import Feed from './Feed';
import PrivateRoute from 'components/PrivateRoute'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/feed" component={Feed} />
        </Switch>
      </Router>
    );
  }
}

export default App;
