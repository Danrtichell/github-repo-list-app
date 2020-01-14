import { fromJS } from 'immutable';
import { LOGIN_SUCCESS } from '../auth/loginRedux';

const initialState = fromJS({
  access: '',
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('access', action.payload.access_token);
    default:
      return state;
  }
}
