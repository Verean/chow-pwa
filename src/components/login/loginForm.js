import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
	body: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	bottom: {
		width: '100%',
		justifyContent: 'center',
	},
	top: {
		width: '100%',
		justifyContent: 'center',
		flex: 'auto',
		padding: '20px'
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		paddingBottom: '5px'
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '100%',
		maxWidth: theme.spacing.unit * 100,
	},
	progress: {
		height: '10px',
		zIndex: 5000
	},
	textField: {
		marginTop: 0,
	},
	errorMsg: {
		color: '#ff1744'
	},
	google: {
		width: '90%',
		background: '#fff3f2',
		color: '#DB4437',
		border: "solid #DB4437 1px",
		borderRadius: 100,
		boxShadow: '0 0px 0px 0px',
	},
	twitter: {
		width: '90%',
		background: '#edf8ff',
		color: '#1DA1F2',
		border: "solid #1DA1F2 1px",
		borderRadius: 100,
		boxShadow: '0 0px 0px 0px',
	},
	facebook: {
		width: '90%', 
		background: '#eff4ff',
		color: '#3b5998',
		border: "solid #3b5998 1px",
		borderRadius: 100,
		boxShadow: '0 0px 0px 0px',
	},
	loginButton: {
		width: '100%',
		height: '50px',
	},
	bottomButtons: {
		width: '75%', 
		height: '3.5vh',
		color: '#E0E0E0',
		boxShadow: '0 0px 0px 0px',
	}
});

const LoginForm = (props) => {
        return (
        <div className={props.classes.body}>
			{props.loading &&
				<LinearProgress className={props.classes.progress}/>
			}
            <Grid container className={props.classes.top} spacing={0}>
                <Grid className={props.classes.container} item xs={12}>
                    <img alt='Logo' src="http://acmelogos.com/images/logo-3.svg"></img>
                </Grid>
            </Grid>
            <Grid className={props.classes.bottom} container spacing={0}>
                <Grid className={props.classes.container} item xs={8}>
                    <Grid className={props.classes.container} item xs={12} md={3}>
                        <Button raised className={props.classes.google}>Google</Button>
                    </Grid>
                    <Grid className={props.classes.container} item xs={12} md={3}>
                        <Button raised className={props.classes.twitter}>Twitter</Button>
                    </Grid>
                    <Grid className={props.classes.container} item xs={12} md={3}>
                        <Button raised className={props.classes.facebook}>Facebook</Button>
                    </Grid>
                </Grid>				
                <Grid className={props.classes.container} item xs={9}>
                    <form className={props.classes.form} noValidate autoComplete="off" onSubmit={props.submit}>
                        <Typography type="caption">OR</Typography>
                        <TextField
                            id="email"
                            label="Email"
                            className={props.classes.textField}
                            margin="normal"
                            fullWidth
                            error={props.msg  && true}
                            value={props.email}
                            onChange={props.updateEmail}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={props.classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            fullWidth
                            error={props.msg  && true}
                            value={props.password}
                            onChange={props.updatePassword}
                        />
						<Typography className={props.classes.errorMsg} type="caption">{props.msg}</Typography>
                        <Button className={props.classes.loginButton} type="submit">Login</Button>
                    </form>
                </Grid>
                <Grid className={props.classes.container} item xs={5}>
                    <Button onClick={props.signUpDialog} dense className={props.classes.bottomButtons}>Sign Up</Button>
                </Grid>
                <Grid className={props.classes.container} item xs={5}>
                    <Button onClick={props.forgotDialog} dense className={props.classes.bottomButtons}>Forgot</Button>
                </Grid>
            </Grid>
        </div>
        )
}

LoginForm.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(LoginForm));