import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Typography } from '@material-ui/core';

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
    <div><Chip size="small" color="primary" variant="outlined" label={category} /></div>
    <div><Typography variant="h5">{ title }</Typography></div>
    <div>
      <button
        type="button"
        onClick={() => removeBookHandler({ id, title, category })}
      >
        Remove Book
      </button>
    </div>
  </>
);

Book.propTypes = {
  removeBookHandler: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
