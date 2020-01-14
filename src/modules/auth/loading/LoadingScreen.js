import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { makeSelectIsRehydrated } from '@grl/redux/selectors/persist/rehydrateSelector';
import { makeSelectToken } from '@grl/redux/selectors/persist/tokenSelector';
import { Block, Text } from '@grl/components';

export default LoadingScreen = ({ navigation }) => {
  const ref = useRef();
  const isRehydrated = useSelector(makeSelectIsRehydrated());
  const token = useSelector(makeSelectToken());

  useEffect(() => {
    ref.isRehydrated = isRehydrated;
  });

  useEffect(() => {
    if (ref.isRehydrated !== isRehydrated && isRehydrated) {
      if (token.access !== '') {
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth');
      }
    }
  }, [isRehydrated]);

  return (
    <Block>
      <Block center middle>
        <Text h1 primary>
          Loading Screen
        </Text>
      </Block>
    </Block>
  );
};
