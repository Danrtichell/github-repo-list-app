import { fromJS } from 'immutable';

const NAMESPACE = 'repo';

// Action Types are namespaced since they are global
export const SEARCH_REPO_REQUEST = `${NAMESPACE}/SEARCH_REPO_REQUEST`;
export const SEARCH_REPO_SUCCESS = `${NAMESPACE}/SEARCH_REPO_SUCCESS`;
export const SEARCH_REPO_FAIL = `${NAMESPACE}/SEARCH_REPO_FAIL`;

// Action Creators are in the same order as action types
export const searchRepoRequest = payload => ({
  type: SEARCH_REPO_REQUEST,
  payload,
});

export const searchRepoSuccess = payload => ({
  type: SEARCH_REPO_SUCCESS,
  payload,
});

export const searchRepoFail = payload => ({
  type: SEARCH_REPO_FAIL,
  payload,
});

const initialState = fromJS({
  isSearching: false,
  errMsg: '',
  list: [],
  totalCount: 0,
});
// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPO_REQUEST:
      return state.set('isSearching', true).set('errMsg', '');
    case SEARCH_REPO_SUCCESS:
      return state
        .set('list', fromJS(action.payload.items))
        .set('totalCount', action.payload.totalCount)
        .set('isSearching', false);
    case SEARCH_REPO_FAIL:
      return state.set('isSearching', false).set('errMsg', action.payload);
    default:
      return state;
  }
}
