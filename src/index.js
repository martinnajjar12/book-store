import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(rootReducer);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0290ff',
    },
    type: 'light',
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
