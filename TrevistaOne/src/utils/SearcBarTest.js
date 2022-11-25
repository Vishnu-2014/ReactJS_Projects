import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar';

const searchBar = () => {
  return (
    <SearchBar
      placeholder="Type Here..."
      containerStyle={styles.SearchBarContainerStyle}
      inputContainerStyle={styles.SearchBarInputContainerStyle}
      searchIcon={null}
    />
  );
};

const styles = StyleSheet.create({
  SearchBarContainerStyle: {
    backgroundColor: '#ffffff',
    width: '70%',
    height: '6%',
    borderRadius: 20,
    borderWidth: 1,
  },
  SearchBarInputContainerStyle: {
    backgroundColor: '#grey',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default searchBar;
