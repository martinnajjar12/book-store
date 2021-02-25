import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <td>{ book.id.toFixed(0) }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
  </>
);

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
