import React from 'react';
import PropTypes from 'prop-types';
import { Image, Linking, StyleSheet } from 'react-native';
import { Block, Button, Text } from '@grl/components';
import { theme } from '@grl/constants';
import { goBack } from '@grl/lib/navigation';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    minWidth: theme.deviceWidth - theme.sizes.padding * 2.4 - theme.sizes.base,
    maxWidth: theme.deviceWidth - theme.sizes.padding * 2.4 - theme.sizes.base,
    minHeight: theme.deviceWidth - theme.sizes.padding - theme.sizes.base,
    maxHeight: theme.deviceWidth - theme.sizes.padding - theme.sizes.base,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginTop: theme.sizes.base,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  back: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    marginRight: 5,
  },
  visitSite: {
    flex: 0.5,
    marginLeft: 5,
  },
});

function RepoDetailsForm({ repoDetails }) {
  const {
    full_name: fullName,
    owner,
    language,
    html_url: repoUrl,
    stargazers_count: starCount,
    watchers_count: watchersCount,
    forks,
  } = repoDetails;
  return (
    <Block column center middle shadow style={styles.card}>
      <Image source={{ uri: owner.avatar_url }} style={styles.avatar} />
      <Block flex={false} column center middle>
        <Text black bold h2 center numberOfLines={2}>
          {fullName}
        </Text>
        <Text gray bold caption center>
          {language}
        </Text>
      </Block>
      <Block row>
        <Block column>
          <Text light h3 center color="blue">
            {starCount}
          </Text>
          <Text gray light small center>
            stars
          </Text>
        </Block>
        <Block column>
          <Text light h3 center tertiary>
            {watchersCount}
          </Text>
          <Text gray light small center>
            watchers
          </Text>
        </Block>
        <Block column>
          <Text light h3 center color="blue">
            {forks}
          </Text>
          <Text gray light small center>
            forks
          </Text>
        </Block>
      </Block>
      <Block flex={1} row center space="evenly">
        <Button transparent onPress={() => goBack()} style={styles.back}>
          <Text bold center tertiary>
            BACK
          </Text>
        </Button>

        <Button
          secondary
          onPress={() => Linking.openURL(repoUrl)}
          style={styles.visitSite}
        >
          <Text bold white center>
            VISIT REPO
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

RepoDetailsForm.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  repoDetails: PropTypes.object.isRequired,
};

export default RepoDetailsForm;
