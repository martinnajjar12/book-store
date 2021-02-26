import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterHandler }) => {
  console.log(filterHandler);
  return (
    <form>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </form>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
