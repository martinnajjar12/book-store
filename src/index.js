import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import rootReducer from './reducers/index';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0290ff',
    },
    type: 'light',
  },
  typography: {
    h5: {
      fontFamily: ['Roboto Slab', 'Roboto', 'Helvetica'].join(','),
    },
    subtitle2: {
      fontFamily: ['Roboto Slab', 'Roboto', 'Helvetica'].join(','),
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
