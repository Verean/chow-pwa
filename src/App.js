import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount() {
    const rootRef = fire.database().ref('speeds');
    const speedRef = rootRef.child('speed');
    //fire.database().ref('speeds').push( "test" );
    speedRef.on('value', snapshot => {
        console.log(snapshot);
        this.setState({
          speed: snapshot.val()
        });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Chow PWA</h2>
        </div>    
          <p>{this.state.speed}</p>
      </div>
    );
  }
}

export default App;
