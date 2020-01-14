import { createStackNavigator } from 'react-navigation';

import { RepoList, RepoDetails } from '@grl/modules';

const AppStack = createStackNavigator({
  RepoList,
  RepoDetails,
});

export default AppStack;
