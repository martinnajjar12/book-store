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
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    color: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h6">
              News
            </Typography>
            <IconButton className={classes.root}>
              <Brightness4Icon />
            </IconButton>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
