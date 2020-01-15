import { call, put, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_REPO_REQUEST,
  searchRepoSuccess,
  searchRepoFail,
} from '@grl/redux/ducks/repoRedux';

import { searchRepo } from '@grl/api/searchApi';

function* searchRepoWorker(action) {
  try {
    const q = action.payload;
    const {
      data: { items, total_count: totalCount },
    } = yield call(searchRepo, {
      q,
      page: 1,
      perPage: 10,
    });
    yield put(searchRepoSuccess({ items, totalCount }));
  } catch (error) {
    yield put(searchRepoFail('Searching repo error'));
  }
}

export default function* watchRepo() {
  yield takeLatest(SEARCH_REPO_REQUEST, searchRepoWorker);
}
