import React from 'react';
import PropTypes from 'prop-types';
import {
  Chip,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import '../index.css';

const linkButton = (e, func) => {
  e.preventDefault();
  func();
};

const useStyles = makeStyles({
  root: {
    padding: '5px 8px',
    margin: 15,
    borderLeft: '1px solid #e8e8e8',
    borderRight: '1px solid #e8e8e8',
    fontFamily: ['Roboto Slab', 'Roboto', 'Helvetica'].join(','),
  },
  changeFont: {
    fontFamily: ['Roboto Slab', 'Roboto', 'Helvetica'].join(','),
  },
  linksDiv: {
    marginTop: 15,
  },
  chipsDiv: {
    marginBottom: 1,
  },
});

const Book = ({
  removeBookHandler,
  book:
  {
    id,
    title,
    category,
  },
}) => {
  const classes = useStyles();
  return (
    <>
      <div><Chip className={classes.chipsDiv} size="small" color="primary" variant="outlined" label={category} /></div>
      <div><Typography variant="h5">{ title }</Typography></div>
      <div><Typography color="primary" variant="subtitle2">Author</Typography></div>
      <div className={classes.linksDiv}>
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <Link className={classes.changeFont} href="#">Comments</Link>
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <Link
          href="#"
          className={classes.root}
          onClick={e => linkButton(e, () => removeBookHandler({ id, title, category }))}
        >
          Remove Book
        </Link>
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <Link className={classes.changeFont} href="#">Edit</Link>
      </div>
    </>
  );
};

Book.propTypes = {
  removeBookHandler: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
