import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth, signOut } from '../firebase';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  flex: {
    flex: 1,
  }
});

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      authed: false,
    }
  }
  componentDidMount () {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged in');
        this.setState({
          authed: true,
        })
      } else {
        console.log('user logged out');
        this.setState({
          authed: false,
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
    render(){
        return (
            <div >
              <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" className={this.props.classes.flex}>
                    Title
                    </Typography>
                    {this.state.authed
                    ? <Link style={{ textDecoration: 'none' }} to="/"><Button raised onClick={() => {signOut()}} color="primary">Log Out</Button></Link>
                    : <Link style={{ textDecoration: 'none' }} to="/login"><Button raised color="primary">Login</Button></Link> 
                    }
                </Toolbar>
              </AppBar>
            </div>
          );
    }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Navbar));