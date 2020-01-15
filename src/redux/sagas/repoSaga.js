import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_REPO_REQUEST,
  searchRepoSuccess,
  searchRepoFail,
  SEARCH_MORE_REPO_REQUEST,
  searchMoreRepoSuccess,
  searchMoreRepoFail,
  SEARCH_REPO_REFRESH_REQUEST,
  searchRepoRefreshSuccess,
  searchRepoRefreshFail,
} from '@grl/redux/ducks/repoRedux';

import { makeSelectRepoCurrentPage } from '@grl/redux/selectors/repoSelector';

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

function* searchMoreRepoWorker(action) {
  try {
    const q = action.payload;
    const currentPage = yield select(makeSelectRepoCurrentPage());
    const newCurrentPage = currentPage + 1;

    const {
      data: { items, total_count: totalCount },
    } = yield call(searchRepo, {
      q,
      page: newCurrentPage,
      perPage: 10,
    });
    yield put(
      searchMoreRepoSuccess({ items, totalCount, currentPage: newCurrentPage })
    );
  } catch (error) {
    yield put(searchMoreRepoFail('Searching more repo error'));
  }
}

function* searchRepoRefreshWorker(action) {
  try {
    const q = action.payload;
    const {
      data: { items, total_count: totalCount },
    } = yield call(searchRepo, {
      q,
      page: 1,
      perPage: 10,
    });
    yield put(searchRepoRefreshSuccess({ items, totalCount }));
  } catch (error) {
    yield put(searchRepoRefreshFail('Searching repo refresh error'));
  }
}

export default function* watchRepo() {
  yield takeLatest(SEARCH_REPO_REQUEST, searchRepoWorker);
  yield takeLatest(SEARCH_MORE_REPO_REQUEST, searchMoreRepoWorker);
  yield takeLatest(SEARCH_REPO_REFRESH_REQUEST, searchRepoRefreshWorker);
}
