import { createStackNavigator } from 'react-navigation';

import { Login } from '@grl/modules';

const initialRouteName = 'Login';

const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    initialRouteName,
  }
);

export default AuthStack;
