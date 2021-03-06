import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, {
    DialogContent,
    DialogTitle,
  } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    flex: {
        flex: 1,
        textAlign: 'right',
        paddingBottom: 0,
        marginBottom: '-18px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
		justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingRight: '18px',
        paddingLeft: '18px'
    },
    signUpBottom: {
        height: '60px',
        marginTop: '16px',
        width: '50%'
    },
    errorMsg: {
        color: '#ff1744',
        textAlign: 'center',
        width: '100%'
	},
});


const SignUpForm = (props) => {
    return (
      <div>
        <Dialog
            ignoreBackdropClick={true}
            open = {props.open}
            onRequestClose={props.close}
            transition={<Slide direction="up" />}
        >
        <DialogTitle className={props.classes.flex}>
            <IconButton color="contrast" onClick={props.close} aria-label="Close">
                <CloseIcon />
              </IconButton></DialogTitle>
          <DialogContent className={props.classes.container}>
          <form className={props.classes.form} noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
                        <TextField
                            id="email"
                            label="Email"
                            className={props.classes.textField}
                            type="email"
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
                        <Button className={props.classes.signUpBottom} onClick={props.submit} type="button">Register</Button>
                    </form>
            </DialogContent>
        </Dialog>
      </div>
    );
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(SignUpForm));