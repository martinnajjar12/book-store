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

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '170px',
    margin: '25px 0',
    padding: 30,
    display: 'block',
  },
  percent: {
    fontSize: 32,
  },
  divider: {
    borderRight: '1px solid #e8e8e8',
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
  buttonMargin: {
    marginTop: 25,
  },
});

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
            <Grid item sm={6}>
              <Book book={book} removeBookHandler={book => handleRemoveBook(book)} />
            </Grid>
            <Grid className={classes.divider} item container sm={3}>
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
              <Button variant="contained" color="primary" className={`${classes.robotoFont} ${classes.buttonMargin}`}>Update Progress</Button>
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
