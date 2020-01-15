import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeSelectIsLoadingLogin } from '@grl/redux/selectors/auth/loginSelector';
import { loginRequest } from '@grl/redux/ducks/auth/loginRedux';

import LoginForm from './LoginForm';

function LoginScreen() {
  const isLoadingLogin = useSelector(makeSelectIsLoadingLogin());

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginRequest(credentials));
  };

  const updateCredentials = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value,
    });
  };

  return (
    <LoginForm
      isLoadingLogin={isLoadingLogin}
      credentials={credentials}
      updateCredentials={updateCredentials}
      handleLogin={handleLogin}
    />
  );
}

LoginScreen.navigationOptions = {
  header: null,
};

export default LoginScreen;
