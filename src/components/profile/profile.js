import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/ArrowBack';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Settings from 'material-ui-icons/Settings';
import Grade from 'material-ui-icons/Grade';
import List from 'material-ui-icons/List';
import SettingOptions from './settings'

const styles = theme => ({
    accent: {
        color: 'black'
    },
    root: {
        minHeight: '100vh',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: 'grey',
        width: '20vh',
        height: '20vh',
        marginTop: '6vh'
    },
    name: {
        margin: 10,
        marginBottom: '6vh',
        color: '#FFFFFF',
    },
    midBar: {
        background: "#EF9A9A",
        boxShadow: '0 0px 0px 0px',
    },
    container: {    
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overrides: {
        MuiTab: {
            rootLabelIcon: {
                height: 100,
              },
        },
      },
});

class Profile extends Component {
    constructor() {
		super();
        this.state = {
            value: 0
        }
    }

    handleChange = (event, index) => {
        this.setState({ value: index });
      };
    

  render () {
    return (
        <div className={this.props.classes.root}>

            <Grid container spacing={0} style={{background: '#EF9A9A'}}>
                <Grid item xs={12} className={this.props.classes.container}>
                    <Avatar className={this.props.classes.avatar}>VP</Avatar>
                </Grid>				
                <Grid item xs={12} className={this.props.classes.container}>
                <Typography type="title" color="inherit" className={this.props.classes.name}>
                    Verean Patel
                </Typography>
                </Grid>
            </Grid>
            <AppBar position="static" color="inherit" className={this.props.classes.midBar}>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="accent"
                textColor="accent"
                fullWidth
                centered
            >
                <Tab label="Posts" icon={<List />} />
                <Tab label="Ratings" icon={<Grade />} />
                <Tab label="Settings" icon={<Settings />} />
            </Tabs>
        </AppBar>
        {this.state.value === 0 &&
            <SettingOptions />
        }
        </div>
    )
  }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);