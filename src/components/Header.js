import {
  AppBar,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#fff',
  },
  logoSize: {
    fontSize: '20px',
    fontWeight: 'bolder',
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
  },
}));

const saveLocal = trueOrFalse => {
  localStorage.setItem('themeBool', trueOrFalse);
};

const Header = ({ themeFunc, light }) => {
  const usedBool = light === 'true';
  const [bool, setBool] = useState(usedBool);
  const classes = useStyles();

  const themeToggler = () => {
    setBool(!bool);
    themeFunc(!bool);
    saveLocal(!bool);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Typography color="primary" variant="h6" className={classes.logoSize}>
              Bookstore CMS
            </Typography>
            <IconButton color="primary" onClick={() => themeToggler()}>
              { bool ? <Brightness4Icon /> : <Brightness7Icon /> }
            </IconButton>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  themeFunc: PropTypes.func.isRequired,
  light: PropTypes.string.isRequired,
};

export default Header;
