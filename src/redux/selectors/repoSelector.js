import { createSelector } from 'reselect';

const selectRepoIsSearching = state => state.getIn(['repo', 'isSearching']);

const selectRepoList = state => state.getIn(['repo', 'list']);

const selectRepoTotalCount = state => state.getIn(['repo', 'totalCount']);

const selectRepoErrMsg = state => state.getIn(['repo', 'errMsg']);

const makeSelectRepoIsSearching = () =>
  createSelector(selectRepoIsSearching, isSearchingState => isSearchingState);

const makeSelectRepoList = () =>
  createSelector(selectRepoList, listState => listState.toJS());

const makeSelectRepoTotalCount = () =>
  createSelector(selectRepoTotalCount, totalCountState => totalCountState);

const makeSelectErrMsg = () =>
  createSelector(selectRepoErrMsg, errMsgState => errMsgState);

export {
  makeSelectRepoIsSearching,
  makeSelectRepoList,
  makeSelectRepoTotalCount,
  makeSelectErrMsg,
};
