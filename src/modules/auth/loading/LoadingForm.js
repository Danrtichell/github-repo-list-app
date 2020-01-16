import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Block, LocalImage } from '@grl/components';

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
});

function LoadingForm() {
  return (
    <Block>
      <Block center middle>
        <LocalImage localSource="GithubLogo" style={styles.logo} />
        <ActivityIndicator animating size="small" />
      </Block>
    </Block>
  );
}

export default LoadingForm;
