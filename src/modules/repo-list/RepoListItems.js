import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Block, Text } from '@grl/components';
import { theme } from '@grl/constants';
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

function RepoListItems({ isSearching, repoList }) {
  return (
    <Choose>
      <When condition={!isSearching}>
        <Block>
          <FlatList
            data={repoList}
            renderItem={({
              item,
              item: { full_name: fullName, owner, description, language },
            }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigate('RepoDetails', { item })}
                >
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
                      <Text gray2 light body center numberOfLines={3}>
                        {description}
                      </Text>
                    </Block>
                  </Block>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              !repoList.length && (
                <Text primary h2 body center>
                  No search results
                </Text>
              )
            }
          />
        </Block>
      </When>
      <Otherwise>
        <ActivityIndicator animating size="large" />
      </Otherwise>
    </Choose>
  );
}

RepoListItems.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  repoList: PropTypes.array.isRequired,
};

export default RepoListItems;
