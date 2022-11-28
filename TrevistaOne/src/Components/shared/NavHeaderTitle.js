import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image} from 'react-native';
import {logoColor, white} from '../../themes/colors';
import Profile from '../../images/Profile.png';
import {SearchBar} from 'react-native-elements';

import CustomSearchBar from '../../utils/SearcBarTest';

const NavHeaderTitle = props => {
  const {title = 'Button', icon, titleExtraStyle} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
      <CustomSearchBar />
      <Image style={styles.ImageStyles} source={Profile} />
    </View>
  );
};

NavHeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  titleExtraStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 16,
    backgroundColor: logoColor,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  textStyle: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ImageStyles: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2AC0EF',
    borderRadius: 30,
  },
  SearchBarContainerStyle: {
    backgroundColor: '#ffffff',
    width: '80%',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  SearchBarInputContainerStyle: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '90%',
    borderRadius: 10,
    borderWidth: 1,
  },
});
export {NavHeaderTitle};
