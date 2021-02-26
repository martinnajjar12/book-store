import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Paper } from '@material-ui/core';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '170px',
    margin: '25px 0',
    display: 'block',
  },
  tableWidth: {
    width: '100%',
  },
});

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
    return printedBooks.map(book => (
      <Paper key={book.id} component="tr" className={classes.root} elevation={5}>
        <Book book={book} removeBookHandler={book => handleRemoveBook(book)} />
      </Paper>
    ));
  };

  return (
    <>
      <CategoryFilter filterHandler={handleFilterChange} />
      <table className={classes.tableWidth}>
        <tbody>
          { loopThroughTheBooks() }
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
