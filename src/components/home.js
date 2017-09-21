import React, { Component } from 'react'
import Navbar from './navbar';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    //zIndex: 1000
    //background: '#9E9E9E'
  }
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: 'recents',
    }
  }

  handleChange = (event, item) => {
    this.setState({ value: item });
  }

  render () {
    return (
      <div>
        <Navbar />
        
        Home. Not Protected. Anyone can see this.<LinearProgress />
        <BottomNavigation value={this.state.value} onChange={this.handleChange} className={this.props.classes.root}>
        <BottomNavigationButton label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationButton label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationButton label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);