import { put, fork } from 'redux-saga/effects';
import { testRoot } from './test';

// function* preprocessor() {
//   console.log('This is the preprocessor!');
// }

export default function* rootSaga() {
  yield fork(testRoot);
  // yield fork(preprocessor);
}
