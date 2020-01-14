import { createSelector } from 'reselect';

const selectIsRehydrated = state =>
  state.getIn(['persist', 'rehydrate', 'isRehydrated']);

const makeSelectIsRehydrated = () =>
  createSelector(
    selectIsRehydrated,
    isRehydratedState => isRehydratedState
  );

export { selectIsRehydrated, makeSelectIsRehydrated };
