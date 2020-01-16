import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from '@grl/constants';
import { setTopLevelNavigator, dispatchChange } from '@grl/lib/navigation';
import Navigation from './config/navigation';
import configureStore from './config/store';

const store = configureStore(() => {});

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigation
        ref={setTopLevelNavigator}
        onNavigationStateChange={dispatchChange}
      />
    </ThemeProvider>
  </Provider>
);
