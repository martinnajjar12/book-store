import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { CREATE_BOOK } from '../actions/index';

const categories = ['', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const category = categories.map(category => (
    // <option key={category} value={category}>{ category }</option>
    <MenuItem key={category} value={category}>{category}</MenuItem>
  ));
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => setInputValue(value);
  const handleSelectChange = ({ target: { value } }) => setSelectValue(value);

  const handleSubmit = () => {
    dispatch(CREATE_BOOK({
      id: shortid.generate(),
      title: inputValue,
      category: selectValue,
    }));
    setSelectValue('');
    setInputValue('');
  };

  return (
    <>
      <form>
        <TextField label="Book Name" variant="outlined" value={inputValue} onChange={handleInputChange} />
        <InputLabel id="categorySelect">Category</InputLabel>
        <Select
          labelId="categorySelect"
          value={selectValue}
          onChange={handleSelectChange}
          style={{ width: 300 }}
        >
          {category}
        </Select>
        <button
          onClick={handleSubmit}
          type="button"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default BookForm;
