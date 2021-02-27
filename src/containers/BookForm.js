import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
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
    <MenuItem key={category} value={category}>{category}</MenuItem>
  ));
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => setInputValue(value);
  const handleSelectChange = ({ target: { value } }) => setSelectValue(value);

  const handleSubmit = () => {
    if (inputValue !== '' && selectValue !== '') {
      setError(false);
      dispatch(CREATE_BOOK({
        id: shortid.generate(),
        title: inputValue,
        category: selectValue,
      }));
      setSelectValue('');
      setInputValue('');
    } else {
      setError(true);
      setHelperText('Fill in all the inputs please');
    }
  };

  return (
    <>
      <Divider style={{ margin: '30px 0 50px' }} />
      <Typography color="textSecondary" variant="h4" style={{ fontWeight: 'bolder', marginBottom: 25 }}>ADD NEW BOOK</Typography>
      <form>
        <FormControl component="fieldset" error={error}>
          <Grid container justify="space-around" style={{ marginBottom: 150 }}>
            <TextField error={error} style={{ width: 750 }} label="Book Name" value={inputValue} onChange={handleInputChange} />
            <div style={{ margin: '0 25px' }}>
              <div style={{ position: 'relative' }}>
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
            </div>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
            <FormHelperText style={{ marginTop: 25 }}>{helperText}</FormHelperText>
          </Grid>
        </FormControl>
      </form>
    </>
  );
};

export default BookForm;
