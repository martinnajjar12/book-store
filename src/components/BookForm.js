import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const category = categories.map(category => (
    <option key={category} value={category}>{ category }</option>
  ));
  return (
    <>
      <form>
        <input type="text" />
        <select>
          {category}
        </select>
        <input type="submit" />
      </form>
    </>
  );
};

export default BookForm;
