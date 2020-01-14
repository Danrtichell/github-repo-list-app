import { put, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFail,
} from '@grl/redux/ducks/auth/loginRedux';

import { navigate } from '@grl/lib/navigation';

function* loginWorker(action) {
  try {
    yield put(loginSuccess({ access_token: '123456' }));
    yield navigate('App');
  } catch (error) {
    yield put(loginFail('Invalid username or password.'));
  }
}

export default function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
}
