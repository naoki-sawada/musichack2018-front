import { put, fork } from 'redux-saga/effects';
import * as actions from 'actions';
import DB from 'utils/DB';
import { testRoot } from './test';
import { radioRoot } from './radio';

function* getTimeline() {
  const db = new DB();
  db.getTimeline((res) => {
    // res.data
    console.log(res.data.replace("string(3119) ", ''));
    console.log();
    const obj = JSON.parse(res.data.replace("string(3119) ", ''));
    console.log(obj);
    actions.timelineDataAdd();
  });
}

function* preprocessor() {
  // yield fork(getTimeline);
}

export default function* rootSaga() {
  // yield fork(testRoot);
  yield fork(radioRoot);
  yield fork(preprocessor);
}
