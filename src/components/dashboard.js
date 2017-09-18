import React, { Component } from 'react'
import Navbar from './navbar';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        Dashboard. Should be protected
      </div>
    )
  }
}

export default Dashboard;