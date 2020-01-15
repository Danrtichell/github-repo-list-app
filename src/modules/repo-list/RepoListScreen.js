import React, { useState } from 'react';
import { Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  makeSelectRepoIsSearching,
  makeSelectRepoIsSearchingMore,
  makeSelectRepoIsRefreshing,
  makeSelectRepoList,
} from '@grl/redux/selectors/repoSelector';
import {
  searchRepoRequest,
  searchMoreRepoRequest,
  searchRepoRefreshRequest,
} from '@grl/redux/ducks/repoRedux';
import RepoListForm from './RepoListForm';

function RepoListScreen() {
  const [searchFocus] = useState(new Animated.Value(0.6));
  const [searchString, setSearchString] = useState(null);
  const isSearching = useSelector(makeSelectRepoIsSearching());
  const isSearchingMore = useSelector(makeSelectRepoIsSearchingMore());
  const isRefreshing = useSelector(makeSelectRepoIsRefreshing());

  const repoList = useSelector(makeSelectRepoList());
  const dispatch = useDispatch();

  const handleSearchFocus = status => {
    Animated.timing(searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150, // ms
    }).start();
  };

  const handleSearching = () => {
    if (searchString) {
      dispatch(searchRepoRequest(searchString));
    }
  };

  const handleSearchMore = () => {
    if (searchString) {
      dispatch(searchMoreRepoRequest(searchString));
    }
  };

  const handleSearchRefresh = () => {
    if (searchString) {
      dispatch(searchRepoRefreshRequest(searchString));
    }
  };

  return (
    <RepoListForm
      searchFocus={searchFocus}
      searchString={searchString}
      isSearching={isSearching}
      isSearchingMore={isSearchingMore}
      isRefreshing={isRefreshing}
      repoList={repoList}
      handleSearchFocus={handleSearchFocus}
      setSearchString={setSearchString}
      handleSearching={handleSearching}
      handleSearchMore={handleSearchMore}
      handleSearchRefresh={handleSearchRefresh}
    />
  );
}

RepoListScreen.navigationOptions = {
  header: null,
};

export default RepoListScreen;
