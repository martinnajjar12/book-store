import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <BookList />
    <BookForm />
  </Provider>
);

export default App;
