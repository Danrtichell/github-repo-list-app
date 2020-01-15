import React, { useState } from 'react';
import { Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  makeSelectRepoIsSearching,
  makeSelectRepoList,
  makeSelectErrMsg,
} from '@grl/redux/selectors/repoSelector';
import { searchRepoRequest } from '@grl/redux/ducks/repoRedux';
import RepoListForm from './RepoListForm';

function RepoListScreen() {
  const [searchFocus] = useState(new Animated.Value(0.6));
  const [searchString, setSearchString] = useState(null);
  const isSearching = useSelector(makeSelectRepoIsSearching());
  const repoList = useSelector(makeSelectRepoList());
  const errMsg = useSelector(makeSelectErrMsg());
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

  return (
    <RepoListForm
      searchFocus={searchFocus}
      searchString={searchString}
      isSearching={isSearching}
      repoList={repoList}
      handleSearchFocus={handleSearchFocus}
      setSearchString={setSearchString}
      handleSearching={handleSearching}
    />
  );
}

RepoListScreen.navigationOptions = {
  header: null,
};

export default RepoListScreen;
