import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import '../robotoSlab.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '25px 0',
    padding: 15,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      padding: 30,
    },
  },
  percent: {
    fontSize: 32,
  },
  divider: {
    margin: '30px 0',
    padding: '0 5px',
    [theme.breakpoints.up('sm')]: {
      borderRight: '1px solid #e8e8e8',
      margin: 0,
    },
  },
  progressMargin: {
    marginRight: 25,
  },
  robotoFont: {
    fontFamily: ['Roboto Slab', 'roboto', 'Helvetica'].join(','),
  },
  weight700: {
    fontWeight: 500,
  },
  buttonStyles: {
    marginTop: 25,
    [theme.breakpoints.only('sm')]: {
      width: 120,
    },
  },
}));

const randomNumber = () => parseInt((100 * Math.random()).toFixed(), 10);

const BooksList = () => {
  const classes = useStyles();
  const books = useSelector(state => state.books);
  const category = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleRemoveBook = book => {
    dispatch(REMOVE_BOOK(book));
  };

  const handleFilterChange = name => {
    dispatch(CHANGE_FILTER(name));
  };

  const loopThroughTheBooks = () => {
    let printedBooks = books;
    if (typeof category === 'object') {
      printedBooks = books;
    } else {
      printedBooks = books.filter(book => book.category === category);
    }

    return printedBooks.map(book => {
      const completedPercent = randomNumber();
      return (
        <Paper key={book.id} className={classes.root} elevation={5}>
          <Grid container alignItems="center">
            <Grid item sm={5} lg={6}>
              <Book book={book} removeBookHandler={book => handleRemoveBook(book)} />
            </Grid>
            <Grid justify="center" alignItems="center" className={classes.divider} item container sm={4} lg={3}>
              <CircularProgress className={classes.progressMargin} size={70} variant="determinate" value={completedPercent} />
              <div>
                <Typography className={classes.percent}>
                  {completedPercent}
                  %
                </Typography>
                <Typography variant="subtitle2">Completed</Typography>
              </div>
            </Grid>
            <Grid item container direction="column" sm={3} justify="center" alignItems="center">
              <Typography variant="subtitle1" color="textSecondary" className={classes.robotoFont}>Current Chapter</Typography>
              <Typography className={`${classes.robotoFont} ${classes.weight700}`}>Chapter 17</Typography>
              <Button variant="contained" color="primary" className={`${classes.robotoFont} ${classes.buttonStyles}`}>Update Progress</Button>
            </Grid>
          </Grid>
        </Paper>
      );
    });
  };

  return (
    <>
      <CategoryFilter filterHandler={handleFilterChange} />
      { loopThroughTheBooks() }
    </>
  );
};

export default BooksList;
