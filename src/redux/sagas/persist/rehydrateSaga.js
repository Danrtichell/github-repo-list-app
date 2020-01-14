import { takeLatest, all, fork, put } from 'redux-saga/effects';
import { finishRehydrate } from '@grl/redux/ducks/persist/rehydrateRedux';

function* rehydrate() {
  yield put(finishRehydrate());
}

function* watchRehydrate() {
  yield takeLatest('persist/REHYDRATE', rehydrate);
}

export default function* persist() {
  yield all([fork(watchRehydrate)]);
}
