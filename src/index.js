import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import orange from 'material-ui/colors/orange';

const globalTheme = createMuiTheme({
	palette: {
    primary: grey,
    secondary: orange,
  },
  overrides: {
    MuiTab: {
        rootAccent: {
            color: '#E57373',
          },
          rootAccentSelected: {
            color: 'white',
          },
    },
    MuiTabIndicator: {
        colorAccent: {
            backgroundColor: 'white',
          },
          colorPrimary: {
            backgroundColor: 'black',
          },
    },
  },
});

ReactDOM.render(
    <MuiThemeProvider theme={globalTheme}>
    <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
