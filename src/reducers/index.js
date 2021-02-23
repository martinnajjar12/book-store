import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './book';

const rootReducer = () => combineReducers(bookReducer);

export default rootReducer;
