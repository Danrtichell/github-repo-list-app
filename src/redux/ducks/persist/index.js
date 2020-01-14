import { combineReducers } from 'redux-immutable';
import rehydrate from './rehydrateRedux';
import token from './tokenRedux';

export default combineReducers({
  rehydrate,
  token,
});
