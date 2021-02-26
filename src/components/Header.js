import {
  AppBar,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
// import Brightness7Icon from '@material-ui/icons/Brightness7';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    color: '#fff',
  },
  logoSize: {
    fontSize: '30px',
    fontWeight: 'bolder',
  },
  navBackground: {
    backgroundColor: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBackground}>
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Typography color="primary" variant="h6" className={classes.logoSize}>
              Bookstore CMS
            </Typography>
            <IconButton color="primary">
              <Brightness4Icon />
            </IconButton>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
