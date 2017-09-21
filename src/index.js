import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

const globalTheme = createMuiTheme({
	palette: {
	  primary: grey,
	  secondary: grey,
	},
});

ReactDOM.render(
    <MuiThemeProvider theme={globalTheme}>
    <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
