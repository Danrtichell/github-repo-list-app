import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Keyboard, StyleSheet } from 'react-native';

import {
  Block,
  Button,
  Input,
  KeyboardAnimatableView,
  LocalImage,
  Text,
} from '@grl/components';
import { theme } from '@grl/constants';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    marginTop: 80,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

function LoginForm({
  isLoadingLogin,
  credentials,
  updateCredentials,
  handleLogin,
}) {
  return (
    <KeyboardAnimatableView style={styles.login}>
      <Block center>
        <LocalImage localSource="GithubLogo" style={styles.logo} />
      </Block>
      <Block padding={[0, theme.sizes.base * 2]}>
        <Block middle>
          <Input
            email
            label="Email"
            value={credentials.username}
            onChangeText={text => updateCredentials('username', text)}
            style={styles.input}
          />
          <Input
            secure
            label="Password"
            value={credentials.password}
            onChangeText={text => updateCredentials('password', text)}
            style={styles.input}
          />
          <Button
            secondary
            onPress={() => {
              handleLogin();
              Keyboard.dismiss();
            }}
          >
            <Choose>
              <When condition={isLoadingLogin}>
                <ActivityIndicator size="small" color="white" />
              </When>
              <Otherwise>
                <Text bold white center>
                  Login
                </Text>
              </Otherwise>
            </Choose>
          </Button>
        </Block>
      </Block>
    </KeyboardAnimatableView>
  );
}

LoginForm.propTypes = {
  isLoadingLogin: PropTypes.bool.isRequired,
  credentials: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  updateCredentials: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
