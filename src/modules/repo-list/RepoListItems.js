import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Block, Text } from '@grl/components';
import { mocks, theme } from '@grl/constants';
import { navigate } from '@grl/lib/navigation';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    minWidth: theme.deviceWidth - theme.sizes.padding * 2.4 - theme.sizes.base,
    maxWidth: theme.deviceWidth - theme.sizes.padding * 2.4 - theme.sizes.base,
    minHeight:
      (theme.deviceWidth - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight:
      (theme.deviceWidth - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

function RepoListItems() {
  return (
    <Block>
      <FlatList
        data={mocks.repoList}
        renderItem={({
          item,
          item: { full_name: fullName, owner, description, language },
        }) => {
          return (
            <TouchableOpacity onPress={() => navigate('RepoDetails', { item })}>
              <Block column center left shadow style={styles.card}>
                <Block flex={false} row left>
                  <Image
                    source={{ uri: owner.avatar_url }}
                    style={styles.avatar}
                  />
                  <Block>
                    <Text black bold header right numberOfLines={1}>
                      {fullName}
                    </Text>
                    <Text gray bold caption right>
                      {language}
                    </Text>
                  </Block>
                </Block>
                <Block middle>
                  <Text gray2 light body center>
                    {description}
                  </Text>
                </Block>
              </Block>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </Block>
  );
}

RepoListItems.propTypes = {};

export default RepoListItems;
