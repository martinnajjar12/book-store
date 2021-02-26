import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterHandler }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <select onChange={e => filterHandler(e.target.value)}>
        { categories.map(category => (
          <option key={category} value={category}>{category}</option>)) }
      </select>
    </form>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
