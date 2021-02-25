import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector(state => state.books);
  const loopThroughTheBooks = books.map(book => (
    <tr key={book.id}>
      <Book book={book} />
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        { loopThroughTheBooks }
      </tbody>
    </table>
  );
};

export default BooksList;
