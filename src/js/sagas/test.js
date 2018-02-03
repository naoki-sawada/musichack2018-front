import { takeLatest, throttle } from "redux-saga";
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';

function* debugMsg() {
  console.log("increment!!!");
}

export function* testRoot() {
  yield takeLatest(actions.TEST_INCREMENT, debugMsg);
}
