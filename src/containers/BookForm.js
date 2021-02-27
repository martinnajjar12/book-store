import {
  Button,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { CREATE_BOOK } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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
    if (inputValue !== '' && selectValue !== '') {
      dispatch(CREATE_BOOK({
        id: shortid.generate(),
        title: inputValue,
        category: selectValue,
      }));
      setSelectValue('');
      setInputValue('');
    } else {
      alert('Please fill in the inputs');
    }
  };

  return (
    <>
      <Divider style={{ margin: '30px 0 50px' }} />
      <Typography color="textSecondary" variant="h4" style={{ fontWeight: 'bolder', marginBottom: 25 }}>ADD NEW BOOK</Typography>
      <form>
        <Grid container justify="space-around" style={{ marginBottom: 150 }}>
          <TextField style={{ width: 750 }} label="Book Name" variant="outlined" value={inputValue} onChange={handleInputChange} />
          <div style={{ margin: '0 25px' }}>
            <InputLabel id="categorySelect">Category</InputLabel>
            <Select
              labelId="categorySelect"
              value={selectValue}
              onChange={handleSelectChange}
              style={{ width: 300 }}
            >
              {category}
            </Select>
          </div>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default BookForm;
