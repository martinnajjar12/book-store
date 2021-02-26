import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_BOOK } from '../actions/index';

const Book = ({ book: { id, title, category } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <td>{ id }</td>
      <td>{ title }</td>
      <td>{ category }</td>
      <td>
        <button
          type="button"
          onClick={() => {
            dispatch(REMOVE_BOOK({ id, title, category }));
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
