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

const getUserThemeState = () => {
  let userTheme = localStorage.getItem('themeBool');
  if (userTheme === null) {
    userTheme = 'true';
  }
  if (userTheme === 'false') {
    return { theme: 'dark', bool: userTheme };
  }
  return { theme: 'light', bool: userTheme };
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(getUserThemeState().theme);

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
      <Header themeFunc={changeTheme} light={getUserThemeState().bool} />
      <Container>
        <BooksList />
        <BookForm />
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
