import React from 'react';
import { Container } from '@material-ui/core';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <Container>
      <BooksList />
      <BookForm />
    </Container>
  </div>
);

export default App;
