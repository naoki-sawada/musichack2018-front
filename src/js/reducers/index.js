import { combineReducers } from 'redux';
import test from './test';
import pageState from './pageState';
import searchState from './searchState';
import postAction from './postAction';
import postState from './postState';
import timelineData from './timelineData';

export default combineReducers({
  test,
  pageState,
  searchState,
  postAction,
  postState,
  timelineData,
});
