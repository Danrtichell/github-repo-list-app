import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Block, Text } from '@grl/components';
import { theme } from '@grl/constants';
import RepoListSearch from './RepoListSearch';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
});

function RepoListForm({
  searchFocus,
  searchString,
  handleSearchFocus,
  setSearchString,
}) {
  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Explore
        </Text>
        <RepoListSearch
          searchFocus={searchFocus}
          searchString={searchString}
          handleSearchFocus={handleSearchFocus}
          setSearchString={setSearchString}
        />
      </Block>
    </Block>
  );
}

RepoListForm.defaultProps = {
  searchString: null,
  searchFocus: {},
};

RepoListForm.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  searchFocus: PropTypes.object,
  searchString: PropTypes.string,
  handleSearchFocus: PropTypes.func.isRequired,
  setSearchString: PropTypes.func.isRequired,
};

export default RepoListForm;
