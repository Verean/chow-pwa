import React, { Component } from 'react'
import { createEmailPassword } from '../firebase'

class Register extends Component {
	constructor() {
		super();
		this.state = {
			registerError: null
		}
	}
    handleSubmit = (e) => {
      e.preventDefault()
	  createEmailPassword(this.email.value, this.pw.value)
	  .catch((error) => {
		  this.setState({registerError: error.message});
	  });
	}
    render () {
      return (
        <div>
			<h1>Register</h1>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Email</label>
					<input ref={(email) => this.email = email} placeholder="Email"/>
				</div>
				<div>
					<label>Password</label>
					<input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
				</div>
				{
				this.state.registerError &&
				<div>
					<span>Error:</span>
					&nbsp;{this.state.registerError}
				</div>
				}
				<button type="submit">Register</button>
			</form>
        </div>
      )
    }
}

export default Register;