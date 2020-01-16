import { createSelector } from 'reselect';

const selectIsLoadingLogin = state =>
  state.getIn(['auth', 'login', 'isLoadingLogin']);

const selectErrMsg = state => state.getIn(['auth', 'login', 'errMsg']);

const makeSelectIsLoadingLogin = () =>
  createSelector(
    selectIsLoadingLogin,
    isLoadingLoginState => isLoadingLoginState
  );

const makeSelectErrMsg = () =>
  createSelector(selectErrMsg, errMsgState => errMsgState);

export { makeSelectIsLoadingLogin, makeSelectErrMsg };
