import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector(state => state.books);
  return (
    <table>
      <thead>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </thead>
      <tbody>
        <tr>
          <Book book={books[0]} />
        </tr>
      </tbody>
    </table>
  );
};

export default BookList;
