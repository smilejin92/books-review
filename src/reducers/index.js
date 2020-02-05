import { combineReducers } from 'redux';
import token from './token';
import books from './books';
import loading from './loading';
import error from './error';

export default combineReducers({
  token,
  books,
  loading,
  error,
});
