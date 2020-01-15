import { createSelector } from 'reselect';

const selectRepoIsSearching = state => state.getIn(['repo', 'isSearching']);

const selectRepoIsSearchingMore = state =>
  state.getIn(['repo', 'isSearchingMore']);

const selectRepoIsRefreshing = state => state.getIn(['repo', 'isRefreshing']);

const selectRepoList = state => state.getIn(['repo', 'list']);

const selectRepoTotalCount = state => state.getIn(['repo', 'totalCount']);

const selectRepoCurrentPage = state => state.getIn(['repo', 'currentPage']);

const selectRepoErrMsg = state => state.getIn(['repo', 'errMsg']);

const makeSelectRepoIsSearching = () =>
  createSelector(selectRepoIsSearching, isSearchingState => isSearchingState);

const makeSelectRepoIsSearchingMore = () =>
  createSelector(
    selectRepoIsSearchingMore,
    isSearchingMoreState => isSearchingMoreState
  );

const makeSelectRepoIsRefreshing = () =>
  createSelector(
    selectRepoIsRefreshing,
    isRefreshingState => isRefreshingState
  );

const makeSelectRepoList = () =>
  createSelector(selectRepoList, listState => listState.toJS());

const makeSelectRepoTotalCount = () =>
  createSelector(selectRepoTotalCount, totalCountState => totalCountState);

const makeSelectRepoCurrentPage = () =>
  createSelector(selectRepoCurrentPage, currentPageState => currentPageState);

const makeSelectErrMsg = () =>
  createSelector(selectRepoErrMsg, errMsgState => errMsgState);

export {
  makeSelectRepoIsSearching,
  makeSelectRepoIsSearchingMore,
  makeSelectRepoIsRefreshing,
  makeSelectRepoList,
  makeSelectRepoTotalCount,
  makeSelectRepoCurrentPage,
  makeSelectErrMsg,
};
