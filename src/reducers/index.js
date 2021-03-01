import { combineReducers } from 'redux';
import bookReducer from './books';
import filter from './filter';

const rootReducer = combineReducers({ books: bookReducer, filter });

export default rootReducer;
