import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Block, Input } from '@grl/components';
import { theme } from '@grl/constants';

const styles = StyleSheet.create({
  search: {
    height: theme.sizes.base * 2,
    width: theme.deviceWidth - theme.sizes.base * 2,
  },
  searchInput: {
    height: 35,
    backgroundColor: theme.colors.manatee,
    borderColor: theme.colors.manatee,
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: theme.colors.transparent,
  },
  searchIcon: {
    position: 'absolute',
    right: theme.sizes.base / 1.333,
    top: -8,
  },
});

function RepoListSearch({
  searchFocus,
  searchString,
  handleSearchFocus,
  setSearchString,
  handleSearching,
}) {
  const isEditing = searchFocus && searchString;

  return (
    <Block animated middle flex={searchFocus} style={styles.search}>
      <Input
        placeholder="Search"
        placeholderTextColor={theme.colors.gray2}
        style={styles.searchInput}
        onFocus={() => handleSearchFocus(true)}
        onBlur={() => handleSearchFocus(false)}
        onChangeText={text => setSearchString(text)}
        value={searchString}
        onSubmitEditing={() => handleSearching()}
        onRightPress={() => (isEditing ? setSearchString(null) : null)}
        rightLabelStyle={styles.searchRight}
        rightContainerStyle={styles.searchIcon}
        rightLabel={() => (
          <FontAwesome
            name={isEditing ? 'close' : 'search'}
            size={theme.sizes.base / 1.6}
            color={theme.colors.gray2}
          />
        )}
      />
    </Block>
  );
}

RepoListSearch.defaultProps = {
  searchString: null,
  searchFocus: {},
};

RepoListSearch.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  searchFocus: PropTypes.object,
  searchString: PropTypes.string,
  handleSearchFocus: PropTypes.func.isRequired,
  setSearchString: PropTypes.func.isRequired,
  handleSearching: PropTypes.func.isRequired,
};

export default RepoListSearch;
