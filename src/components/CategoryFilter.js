import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterHandler }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <select onChange={e => filterHandler(e.target.value)}>
        <option key="All" value="All">All</option>
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
