import React, { useState } from 'react';
import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';
import Header from './Header';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const changeTheme = type => {
    if (type) {
      setCurrentTheme('light');
    } else {
      setCurrentTheme('dark');
    }
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0290ff',
      },
      type: currentTheme,
    },
    typography: {
      h5: {
        fontFamily: ['Roboto Slab', 'Roboto', 'Helvetica'].join(','),
        fontWeight: 700,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header themeFunc={changeTheme} type={currentTheme} />
      <Container>
        <BooksList />
        <BookForm />
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
