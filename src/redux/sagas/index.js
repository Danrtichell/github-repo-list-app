import { all, fork } from 'redux-saga/effects';

import persist from './persist';
import auth from './authSaga';
import repo from './repoSaga';

export default function* rootSaga() {
  yield all([fork(persist), auth(), repo()]);
}
