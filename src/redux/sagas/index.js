import { all, fork } from 'redux-saga/effects';

import persist from './persist';
import auth from './authSaga';

export default function* rootSaga() {
  yield all([fork(persist), auth()]);
}
