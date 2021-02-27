import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';

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
            <Grid item sm={3}>
              <Typography>Helo workd</Typography>
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
