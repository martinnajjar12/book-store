import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <CssBaseline />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
