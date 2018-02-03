import { combineReducers } from 'redux';
import test from './test';
import pageState from './pageState';
import searchState from './searchState';
import postAction from './postAction';
import postState from './postState';

export default combineReducers({
  test,
  pageState,
  searchState,
  postAction,
  postState,
});
