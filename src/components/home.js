import React, { Component } from 'react'
import Navbar from './navbar';

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        Home. Not Protected. Anyone can see this.
      </div>
    )
  }
}

export default Home;