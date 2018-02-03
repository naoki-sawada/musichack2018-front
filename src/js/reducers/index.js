import { combineReducers } from 'redux';
import test from './test';
import pageState from './pageState';
import searchState from './searchState';
import postAction from './postAction';

export default combineReducers({
  test,
  pageState,
  searchState,
  postAction,
});
