import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { makeSelectIsRehydrated } from '@grl/redux/selectors/persist/rehydrateSelector';
import { makeSelectToken } from '@grl/redux/selectors/persist/tokenSelector';
import LoadingForm from './LoadingForm';

function LoadingScreen({ navigation }) {
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
  }, [isRehydrated, navigation, token]);

  return <LoadingForm />;
}

export default LoadingScreen;
