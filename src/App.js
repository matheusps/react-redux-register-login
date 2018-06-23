import React, { Component } from 'react';
import { Router, Route } from  'react-router-dom';

import { history } from './helpers';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
