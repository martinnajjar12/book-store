import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
  </>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
