import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const category = categories.map(category => category);
  (
    <>
      <form>
        <input type="text" />
        <select>
          <option value={category}>{ category }</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
};

export default BookForm;
