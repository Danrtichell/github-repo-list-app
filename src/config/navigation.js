import React from 'react';

import {
  ActivityIndicator,
  AsyncStorage, // eslint-disable-line
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Loading } from '@grl/modules';
import AuthStack from '../routes/AuthStack';
import AppStack from '../routes/AppStack';

export const NAVIGATION_OPTIONS = {
  persistenceKey: 'GRLNavigationState_1.0',
  renderLoadingExperiment: <ActivityIndicator />,
};

AsyncStorage.removeItem(NAVIGATION_OPTIONS.persistenceKey);

const MainNavigator = createSwitchNavigator(
  {
    Loading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default createAppContainer(MainNavigator);
