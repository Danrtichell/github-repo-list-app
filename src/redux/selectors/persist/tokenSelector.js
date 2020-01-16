import { createSelector } from 'reselect';

const selectToken = state => state.getIn(['persist', 'token']);

const makeSelectToken = () =>
  createSelector(selectToken, tokenState => tokenState.toJS());

export { selectToken, makeSelectToken };
