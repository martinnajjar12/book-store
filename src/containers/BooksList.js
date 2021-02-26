import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';

const BooksList = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = book => {
    dispatch(REMOVE_BOOK(book));
  };

  const handleFilterChange = name => {
    dispatch(CHANGE_FILTER(name));
  };

  const loopThroughTheBooks = books.map(book => (
    <tr key={book.id}>
      <Book book={book} removeBookHandler={book => handleRemoveBook(book)} />
    </tr>
  ));

  return (
    <>
      <CategoryFilter filterHandler={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { loopThroughTheBooks }
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
