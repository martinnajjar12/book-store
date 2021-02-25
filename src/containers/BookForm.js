import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { CREATE_BOOK } from '../actions/index';

const categories = ['', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const category = categories.map(category => (
    <option key={category} value={category}>{ category }</option>
  ));
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const handleSelectChange = e => {
    setSelectValue(e.target.value);
  };
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <input value={inputValue} onChange={handleInputChange} type="text" />
        <select value={selectValue} onChange={handleSelectChange}>
          {category}
        </select>
        <button
          onClick={() => {
            dispatch(CREATE_BOOK({
              id: shortid.generate(),
              title: inputValue,
              category: selectValue,
            }));
          }}
          type="button"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default BookForm;
