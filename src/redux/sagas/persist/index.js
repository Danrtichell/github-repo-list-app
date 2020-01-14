import { all, fork } from 'redux-saga/effects';
import rehydrate from './rehydrateSaga';

export default function* persist() {
  yield all([fork(rehydrate)]);
}
