import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import styled from 'styled-components/native';

const TouchableOpacity = styled.TouchableOpacity`
  border-radius: ${({ theme }) => theme.sizes.radius};
  height: ${({ theme }) => theme.sizes.base * 3};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  margin-vertical: ${({ theme }) => theme.sizes.padding / 3};

  ${({ shadow, theme }) =>
    shadow &&
    `
    shadow-color: ${theme.colors.black};
    shadow-offset: 0 2px;
    shadow-opacity: 0.1;
    shadow-radius: 10;
  `}

  /* predefined styles colors for backgroundColor */
  ${({ primary, theme }) =>
    primary &&
    `
    background-color: ${theme.colors.primary};
  `}
  ${({ secondary, theme }) =>
    secondary &&
    `
    background-color: ${theme.colors.secondary};
  `}
  ${({ tertiary, theme }) =>
    tertiary &&
    `
    background-color: ${theme.colors.tertiary};
  `}
  ${({ gray, theme }) =>
    gray &&
    `
    background-color: ${theme.colors.gray};
  `}
  ${({ gray2, theme }) =>
    gray2 &&
    `
    background-color: ${theme.colors.gray2};
  `}

  /* custom backgroundColor */
  ${({ color, theme }) =>
    color &&
    !theme.colors[color] &&
    `
    background-color: ${color};
  `}
`;

function Button({
  style,
  opacity,
  primary,
  secondary,
  tertiary,
  gray,
  gray2,
  color,
  shadow,
  children,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      gray={gray}
      gray2={gray2}
      color={color}
      shadow={shadow}
      onPress={onPress}
      style={style}
    >
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  opacity: 0.8,
  primary: false,
  secondary: false,
  tertiary: false,
  gray: false,
  gray2: false,
  color: 'white',
  shadow: false,
  onPress: () => {},
  style: {},
};

Button.propTypes = {
  opacity: PropTypes.number,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  gray: PropTypes.bool,
  gray2: PropTypes.bool,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

export default Button;
