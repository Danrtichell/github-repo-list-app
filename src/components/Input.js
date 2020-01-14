import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StyleSheet, ViewPropTypes } from 'react-native';

import { theme as appTheme } from '@grl/constants';
import Text from './Text';
import Block from './Block';

const TextInput = styled.TextInput`
  border-width: ${() => StyleSheet.hairlineWidth};
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.sizes.radius};
  font-size: ${({ theme }) => theme.sizes.font};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.sizes.base * 3};
`;

function Input({
  label,
  email,
  phone,
  number,
  secure,
  value,
  onChangeText,
  style,
}) {
  let inputType = 'default';

  if (email) {
    inputType = 'email-address';
  } else if (number) {
    inputType = 'numeric';
  } else if (phone) {
    inputType = 'phone-pad';
  }

  const renderLabel = () => {
    return (
      <Block flex={false}>
        <If condition={label}>
          <Text gray2>{label}</Text>
        </If>
      </Block>
    );
  };

  return (
    <Block flex={false} margin={[appTheme.sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        style={style}
        secureTextEntry={secure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        value={value}
        onChangeText={onChangeText}
      />
    </Block>
  );
}

Input.defaultProps = {
  label: '',
  email: false,
  phone: false,
  number: false,
  secure: false,
  value: '',
  onChangeText: () => {},
  style: {},
};

Input.propTypes = {
  label: PropTypes.string,
  email: PropTypes.bool,
  phone: PropTypes.bool,
  number: PropTypes.bool,
  secure: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: ViewPropTypes.style,
};

export default Input;
