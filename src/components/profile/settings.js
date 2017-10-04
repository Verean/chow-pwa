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
                        tETST
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={0} justify={'center'}>
                        tETST
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={0} justify={'center'}>
                        tETST
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={this.props.classes.top} container spacing={0}>		
                <Grid className={this.props.classes.container} item xs={10}>
                <Grid className={this.props.classes.container} item xs={10}>
                <TextField
                            id="email"
                            label="First Name"
                            value='Verean'
                            className={this.props.classes.textField}
                            margin="normal"
                            fullWidth
                        />
                </Grid>
                <Grid  item xs={2}>
                <Button className={this.props.classes.buttons}>Change</Button>
                </Grid>
                    <form className={this.props.classes.form} noValidate autoComplete="off" onSubmit={this.props.submit}>
                        <Typography type="caption">OR</Typography>
                        <TextField
                            id="email"
                            label="First Name"
                            value='Verean'
                            className={this.props.classes.textField}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="Last Name"
                            value='Patel'
                            className={this.props.classes.textField}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="Phone Number"
                            value='(---) ---_----'
                            className={this.props.classes.textField}
                            margin="normal"
                            fullWidth
                        />
						<Typography className={this.props.classes.errorMsg} type="caption">{this.props.msg}</Typography>
                        test
                    </form>
                </Grid>
                <Grid className={this.props.classes.container} item xs={5}>
                    test
                </Grid>
                <Grid className={this.props.classes.container} item xs={5}>
                    test
                </Grid>
            </Grid>
      </div>
    )
  }
}

export default (withStyles(styles)(SettingOptions));