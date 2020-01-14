import { fromJS } from 'immutable';

const NAMESPACE = 'auth';

// Action Types are namespaced since they are global
export const LOGIN_REQUEST = `${NAMESPACE}/LOGIN_REQUEST`;
export const LOGIN_SUCCESS = `${NAMESPACE}/LOGIN_SUCCESS`;
export const LOGIN_FAIL = `${NAMESPACE}/LOGIN_FAIL`;

// Action Creators are in the same order as action types
export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: LOGIN_FAIL,
  payload,
});

const initialState = fromJS({
  isLoadingLogin: false,
  errMsg: '',
  result: {},
});
// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set('isLoadingLogin', true).set('errMsg', '');
    case LOGIN_SUCCESS:
      return state
        .set('result', fromJS(action.payload))
        .set('isLoadingLogin', false);
    case LOGIN_FAIL:
      return state.set('isLoadingLogin', false).set('errMsg', action.payload);
    default:
      return state;
  }
}
