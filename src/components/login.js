import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { auth, signIn } from '../firebase'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
	rootone: {
		flexGrow: 1,
		marginTop: '-24px',
		paddingTop: '32px',
		marginLeft: '-24px',
		paddingLeft: '32px',
	  },
	  boxone: {
		height: '33vh',
		marginTop: '-16px',
		paddingTop: '8px',
		paddingBottom: '8px',
		
	},
	container: {
		//padding: theme.spacing.unit * 2,
		paddingLeft: '7vw',
		paddingRight: '7vw',
		width: '100vw',
		maxWidth: theme.spacing.unit * 100,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	textField: {
		// marginLeft: theme.spacing.unit * 2,
		// marginRight: theme.spacing.unit,
	},
	loginButton: {
		marginTop: '20px',
		width: '50vw',
		maxWidth: theme.spacing.unit * 50,
		height: '3.5vh',
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 100,
		color: 'white',
	}
});

class Login extends Component {
	constructor() {
		super();
		this.state = {
			loginMessage: null,
			errorEmail: false,
			errorPassword: false,
			email: "test@gmail.com",
			password: "testing",
			authed: false,
		}
	}
	componentDidMount () {
		this.removeListener = auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					authed: true,
				})
			} else {
				this.setState({
					authed: false,
				})
			}
		})
	}
	componentWillUnmount () {
		this.removeListener()
	}
    handleSubmit = (e) => {
		e.preventDefault()
		signIn(this.state.email, this.state.password)
		.catch((error) => {
			this.setState({errorEmail: true});	
			this.setState({errorPassword: true});
			this.setState({loginMessage: 'Invalid username/password.'});
			});
	}
	handleEmail = (e) => {
		this.setState({email : e.target.value});
		console.log(e.target.value);
		if(e.target.value === ""){
			this.setState({errorEmail: false});
		}
	}
	handlePassword = (e) => {
		this.setState({password : e.target.value});
		if(e.target.value === ""){
			this.setState({errorPassword: false});
		}
	}
	
    render () {
		if(this.state.authed){
			console.log("authed");
			return <Redirect to="/dashboard"/>
		}
		return (
		<div>
			<Grid container className={this.props.classes.rootone}>
				<Grid item xs={12}>
					<Grid container className={this.props.classes.boxone} align={"center"} justify={"center"}>
						logo
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container className={this.props.classes.boxone} align={"flex-end"} justify={"center"}>
						<Button>Google</Button>
						<Button>Twitter</Button>
						<Button>Facebook</Button>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container className={this.props.classes.boxone} align={"flex-start"} justify={"center"}>
					<form className={this.props.classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
							<TextField
								id="email"
								label="Email"
								className={this.props.classes.textField}
								margin="normal"
								fullWidth
								error={this.state.errorEmail}
								value={this.state.email}
								onChange={this.handleEmail}
							/>
							<TextField
								id="password"
								label="Password"
								className={this.props.classes.textField}
								type="password"
								autoComplete="current-password"
								margin="normal"
								fullWidth
								error={this.state.errorPassword}
								value={this.state.password}
								onChange={this.handlePassword}
							/>
							<Button className={this.props.classes.loginButton} raised type="submit">Login</Button>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</div>
      	)
    }
}

Login.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(Login));