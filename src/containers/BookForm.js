import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
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

const useStyles = makeStyles(theme => ({
  dividerStyles: {
    margin: '30px 0 50px',
  },
  typographyStyles: {
    fontWeight: 'bolder',
    marginBottom: 25,
  },
  root: {
    width: '100%',
  },
  gridStyles: {
    marginBottom: 150,
  },
  textFieldStyles: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
  firstDivStyles: {
    marginTop: 25,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30%',
      marginTop: 0,
    },
  },
  secondDivStyles: {
    position: 'relative',
    width: '100%',
  },
  selectStyles: {
    width: '100%',
  },
  buttonStyles: {
    marginTop: 25,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      width: '20%',
    },
  },
  formHelperTextStyles: {
    marginTop: 25,
  },
}));

const BookForm = () => {
  const classes = useStyles();
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
      setHelperText('');
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
      <Divider className={classes.dividerStyles} />
      <Typography color="textSecondary" variant="h4" className={classes.typographyStyles}>ADD NEW BOOK</Typography>
      <form>
        <FormControl className={classes.root} component="fieldset" error={error}>
          <Grid container justify="space-around" className={classes.gridStyles}>
            <TextField error={error} className={classes.textFieldStyles} label="Book Name" value={inputValue} onChange={handleInputChange} />
            <div className={classes.firstDivStyles}>
              <div className={classes.secondDivStyles}>
                <InputLabel id="categorySelect">Category</InputLabel>
                <Select
                  labelId="categorySelect"
                  value={selectValue}
                  onChange={handleSelectChange}
                  className={classes.selectStyles}
                >
                  {category}
                </Select>
              </div>
            </div>
            <Button className={classes.buttonStyles} onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
            <FormHelperText className={classes.formHelperTextStyles}>{helperText}</FormHelperText>
          </Grid>
        </FormControl>
      </form>
    </>
  );
};

export default BookForm;
