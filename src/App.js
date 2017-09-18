import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Dashboard from './components/dashboard';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
            <Route render={() => <h3>No Match</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    )}
}

export default App;
