import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Profile from './components/profile/profile';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
            <Route render={() => <h3>No Match</h3>} />
          </Switch>
      </BrowserRouter>
    )}
}

export default App;
