import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, StatusBar, ViewPropTypes } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { theme } from '@grl/constants';

class KeyboardAnimatableView extends Component {
  constructor() {
    super();
    this.state = {
      isKeyboardShow: false,
    };
  }

  componentDidMount() {
    const name = theme.platform === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardWillShow = () => {
    this.setState({ isKeyboardShow: true });
  };

  keyboardWillHide = () => {
    this.setState({ isKeyboardShow: false });
  };

  render() {
    const { isKeyboardShow } = this.state;
    const { marginTop, style, children } = this.props;
    const statusBarHeight =
      theme.platform === 'ios' ? 0 : StatusBar.currentHeight;
    return (
      <Animatable.View
        transition="marginTop"
        /* eslint-disable react-native/no-inline-styles */
        style={[
          {
            marginTop: isKeyboardShow ? marginTop - statusBarHeight : 0,
          },
          style,
        ]}
      >
        {children}
      </Animatable.View>
    );
  }
}

KeyboardAnimatableView.defaultProps = {
  marginTop: -180,
  style: {},
};

KeyboardAnimatableView.propTypes = {
  children: PropTypes.element.isRequired,
  marginTop: PropTypes.number,
  style: ViewPropTypes.style,
};

export default KeyboardAnimatableView;
