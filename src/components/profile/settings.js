import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	body: {

        //background: 'yellow'
    },
	container: {
		display: 'flex',
		flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'right',
		paddingBottom: '5px'
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
        width: '100%',
        maxWidth: theme.spacing.unit * 100,
	},
	textField: {
        maxWidth: theme.spacing.unit * 100,
		//marginTop: 0,
    },
    buttons: {
        align: 'left'
    },
    top: {
        display: 'flex',
		width: '100%',
		justifyContent: 'center',
		flex: 'auto',
	},
});


class SettingOptions extends Component {
  render () {
    return (
      <div className={this.props.classes.body}>
            <Grid container spacing={0} justify={'center'}>
                <Grid item xs={10}>
                    <Grid container spacing={0} justify={'center'}>
                        <TextField
                            id="email"
                            label="First Name"
                            value='Verean'
                            className={this.props.classes.textField}
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={0} justify={'center'}>
                        Input text
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={0} justify={'center'}>
                        Input text
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={0} justify={'center'}>
                        Input text
                    </Grid>
                </Grid>
            </Grid>
    )
  }
}

export default (withStyles(styles)(SettingOptions));