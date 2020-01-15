import { put, takeLatest, delay } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFail,
} from '@grl/redux/ducks/auth/loginRedux';

import { navigate } from '@grl/lib/navigation';

function* loginWorker() {
  try {
    yield delay(2000);
    yield put(loginSuccess({ access_token: '123456' }));
    yield navigate('App');
  } catch (error) {
    yield put(loginFail('Invalid username or password.'));
  }
}

export default function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
}
