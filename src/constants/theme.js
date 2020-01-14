import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const colors = {
  primary: '#0AC4BA',
  secondary: '#2BDA8E',
  tertiary: '#FFE358',
  black: '#323643',
  white: '#FFFFFF',
  gray: '#9DA3B4',
  gray2: '#C5CCD6',
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
  small: 10,
};

const fontSizes = {
  h1: sizes.h1,
  h2: sizes.h2,
  h3: sizes.h3,
  header: sizes.header,
  title: sizes.title,
  body: sizes.body,
  caption: sizes.caption,
  small: sizes.small,
};

const fonts = {
  robotoBlack: 'Roboto-Black',
  robotoBold: 'Roboto-Bold',
  robotoItalic: 'Roboto-Italic',
  robotoLight: 'Roboto-Light',
  robotoMedium: 'Roboto-Medium',
  robotoRegular: 'Roboto-Regular',
  robotoThin: 'Roboto-Thin',
};

const theme = {
  deviceHeight,
  deviceWidth,
  platform,
  colors,
  sizes,
  fonts,
  fontSizes,
};

export default theme;
