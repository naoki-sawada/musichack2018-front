import { takeLatest, throttle } from "redux-saga";
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';

function* playLoop() {
  while(true) {
    // console.log('sssssssssssssssssss');
    yield delay(1000);
  }
}

function* debugMsg(arg) {
  console.log('aaaaaaaaaaaaaaa',arg);
  if (arg.payload === 'rss_feed') {
    yield fork(playLoop);
  }
}

export function* radioRoot() {
  yield takeLatest(actions.PAGE_STATE, debugMsg);
}
