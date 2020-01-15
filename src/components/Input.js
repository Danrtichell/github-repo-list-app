import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StyleSheet, ViewPropTypes } from 'react-native';

import { theme as appTheme } from '@grl/constants';
import Text from './Text';
import Block from './Block';
import Button from './Button';

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
  rightLabel,
  placeholder,
  placeholderTextColor,
  email,
  phone,
  number,
  secure,
  value,
  onChangeText,
  onFocus,
  onBlur,
  onRightPress,
  rightLabelStyle,
  rightContainerStyle,
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

  const renderRight = () => {
    if (!rightLabel) return null;

    return (
      <Block style={rightContainerStyle}>
        <Button
          style={rightLabelStyle}
          onPress={() => onRightPress && onRightPress()}
        >
          {rightLabel()}
        </Button>
      </Block>
    );
  };

  return (
    <Block flex={false} margin={[appTheme.sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        secureTextEntry={secure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        style={style}
      />
      {renderRight()}
    </Block>
  );
}

Input.defaultProps = {
  label: '',
  rightLabel: null,
  placeholder: '',
  placeholderTextColor: appTheme.colors.white,
  email: false,
  phone: false,
  number: false,
  secure: false,
  value: '',
  onChangeText: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onRightPress: () => {},
  rightLabelStyle: {},
  rightContainerStyle: {},
  style: {},
};

Input.propTypes = {
  label: PropTypes.string,
  rightLabel: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  email: PropTypes.bool,
  phone: PropTypes.bool,
  number: PropTypes.bool,
  secure: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onRightPress: PropTypes.func,
  rightLabelStyle: ViewPropTypes.style,
  rightContainerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
};

export default Input;
