import { fromJS } from 'immutable';

const NAMESPACE = 'repo';

// Action Types are namespaced since they are global
export const SEARCH_REPO_REQUEST = `${NAMESPACE}/SEARCH_REPO_REQUEST`;
export const SEARCH_REPO_SUCCESS = `${NAMESPACE}/SEARCH_REPO_SUCCESS`;
export const SEARCH_REPO_FAIL = `${NAMESPACE}/SEARCH_REPO_FAIL`;

export const SEARCH_MORE_REPO_REQUEST = `${NAMESPACE}/SEARCH_MORE_REPO_REQUEST`;
export const SEARCH_MORE_REPO_SUCCESS = `${NAMESPACE}/SEARCH_MORE_REPO_SUCCESS`;
export const SEARCH_MORE_REPO_FAIL = `${NAMESPACE}/SEARCH_MORE_REPO_FAIL`;

export const SEARCH_REPO_REFRESH_REQUEST = `${NAMESPACE}/SEARCH_REPO_REFRESH_REQUEST`;
export const SEARCH_REPO_REFRESH_SUCCESS = `${NAMESPACE}/SEARCH_REPO_REFRESH_SUCCESS`;
export const SEARCH_REPO_REFRESH_FAIL = `${NAMESPACE}/SEARCH_REPO_REFRESH_FAIL`;

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

export const searchMoreRepoRequest = payload => ({
  type: SEARCH_MORE_REPO_REQUEST,
  payload,
});

export const searchMoreRepoSuccess = payload => ({
  type: SEARCH_MORE_REPO_SUCCESS,
  payload,
});

export const searchMoreRepoFail = payload => ({
  type: SEARCH_MORE_REPO_FAIL,
  payload,
});

export const searchRepoRefreshRequest = payload => ({
  type: SEARCH_REPO_REFRESH_REQUEST,
  payload,
});

export const searchRepoRefreshSuccess = payload => ({
  type: SEARCH_REPO_REFRESH_SUCCESS,
  payload,
});

export const searchRepoRefreshFail = payload => ({
  type: SEARCH_REPO_REFRESH_FAIL,
  payload,
});

const initialState = fromJS({
  isSearching: false,
  isSearchingMore: false,
  isRefreshing: false,
  errMsg: '',
  list: [],
  totalCount: 0,
  currentPage: 1,
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
    case SEARCH_MORE_REPO_REQUEST:
      return state.set('isSearchingMore', true).set('errMsg', '');
    case SEARCH_MORE_REPO_SUCCESS:
      return state
        .set('list', fromJS([...state.get('list'), ...action.payload.items]))
        .set('totalCount', action.payload.totalCount)
        .set('currentPage', action.payload.currentPage)
        .set('isSearchingMore', false);
    case SEARCH_MORE_REPO_FAIL:
      return state.set('isRefreshing', false).set('errMsg', action.payload);
    case SEARCH_REPO_REFRESH_REQUEST:
      return state.set('isRefreshing', true).set('errMsg', '');
    case SEARCH_REPO_REFRESH_SUCCESS:
      return state
        .set('list', fromJS(action.payload.items))
        .set('totalCount', action.payload.totalCount)
        .set('currentPage', 1)
        .set('isRefreshing', false);
    case SEARCH_REPO_REFRESH_FAIL:
      return state.set('isRefreshing', false).set('errMsg', action.payload);
    default:
      return state;
  }
}
