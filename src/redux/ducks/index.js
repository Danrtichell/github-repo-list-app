import { combineReducers } from 'redux-immutable';

import persist from './persist';
import auth from './auth';
import repo from './repoRedux';

export default combineReducers({
  persist,
  auth,
  repo,
});
