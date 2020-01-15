import React, { useState } from 'react';
import { Animated } from 'react-native';
import RepoListForm from './RepoListForm';

function RepoListScreen() {
  const [searchFocus] = useState(new Animated.Value(0.6));
  const [searchString, setSearchString] = useState(null);

  const handleSearchFocus = status => {
    Animated.timing(searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150, // ms
    }).start();
  };
  return (
    <RepoListForm
      searchFocus={searchFocus}
      searchString={searchString}
      handleSearchFocus={handleSearchFocus}
      setSearchString={setSearchString}
    />
  );
}

RepoListScreen.navigationOptions = {
  header: null,
};

export default RepoListScreen;
