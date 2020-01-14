import { combineReducers } from 'redux-immutable';

import persist from './persist';
import auth from './auth';

export default combineReducers({
  persist,
  auth,
});
