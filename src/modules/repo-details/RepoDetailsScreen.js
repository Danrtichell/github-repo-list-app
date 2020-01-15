import React from 'react';
import RepoDetailsForm from './RepoDetailsForm';

function RepoDetailsScreen({ navigation }) {
  const {
    state: {
      params: { item: repoDetails },
    },
  } = navigation;

  return <RepoDetailsForm repoDetails={repoDetails} />;
}

RepoDetailsScreen.navigationOptions = {
  header: null,
};

export default RepoDetailsScreen;
