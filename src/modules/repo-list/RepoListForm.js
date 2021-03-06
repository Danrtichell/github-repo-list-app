import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Block, Text } from '@grl/components';
import { theme } from '@grl/constants';
import RepoListSearch from './RepoListSearch';
import RepoListItems from './RepoListItems';

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
});

function RepoListForm({
  searchFocus,
  searchString,
  isSearching,
  isSearchingMore,
  isRefreshing,
  repoList,
  handleSearchFocus,
  setSearchString,
  handleSearching,
  handleSearchMore,
  handleSearchRefresh,
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
          handleSearching={handleSearching}
        />
      </Block>
      <RepoListItems
        isSearching={isSearching}
        isSearchingMore={isSearchingMore}
        isRefreshing={isRefreshing}
        repoList={repoList}
        handleSearchMore={handleSearchMore}
        handleSearchRefresh={handleSearchRefresh}
      />
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
  isSearching: PropTypes.bool.isRequired,
  isSearchingMore: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  repoList: PropTypes.array.isRequired,
  handleSearchFocus: PropTypes.func.isRequired,
  setSearchString: PropTypes.func.isRequired,
  handleSearching: PropTypes.func.isRequired,
  handleSearchMore: PropTypes.func.isRequired,
  handleSearchRefresh: PropTypes.func.isRequired,
};

export default RepoListForm;
