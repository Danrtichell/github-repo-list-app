import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import { Block, Button, Input, Text } from '@grl/components';
import { theme } from '@grl/constants';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
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
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
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
    </KeyboardAvoidingView>
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
