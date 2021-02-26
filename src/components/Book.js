import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  removeBookHandler,
  book:
  {
    id,
    title,
    category,
  },
}) => (
  <>
    <td>{ id }</td>
    <td>{ title }</td>
    <td>{ category }</td>
    <td>
      <button
        type="button"
        onClick={() => removeBookHandler({ id, title, category })}
      >
        Remove Book
      </button>
    </td>
  </>
);

Book.propTypes = {
  removeBookHandler: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
