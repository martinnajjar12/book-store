import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CategoryFilter = ({ filterHandler }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <Autocomplete
      onChange={e => filterHandler(e.target.textContent)}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          filterHandler(e.target.value);
        }
      }}
      options={categories}
      getOptionLabel={option => option}
      style={{ width: 500, marginTop: 40 }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={params => <TextField {...params} label="Category Filtering" variant="outlined" />}
    />
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
