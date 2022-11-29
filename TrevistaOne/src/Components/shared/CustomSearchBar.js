/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar';

const CustomSearchBar = () => {
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
    width: '80%',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  SearchBarInputContainerStyle: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
});

export default CustomSearchBar;
