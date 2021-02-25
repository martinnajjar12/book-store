import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_BOOK } from '../actions/index';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <>
      <td>{ book.id }</td>
      <td>{ book.title }</td>
      <td>{ book.category }</td>
      <td>
        <button
          type="button"
          onClick={() => {
            dispatch(REMOVE_BOOK(book));
          }}
        >
          Remove Book
        </button>
      </td>
    </>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
