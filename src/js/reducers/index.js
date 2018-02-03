import { combineReducers } from 'redux';
import test from './test';
import pageState from './pageState';
import searchState from './searchState';

export default combineReducers({
  test,
  pageState,
  searchState,
});
