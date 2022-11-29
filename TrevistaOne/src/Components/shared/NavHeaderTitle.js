/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image} from 'react-native';

import CustomSearchBar from '../../Components/shared/CustomSearchBar';

const NavHeaderTitle = props => {
  const {icon} = props;
  return (
    <View style={styles.Card}>
      <CustomSearchBar />
      <Image style={styles.ImageStyles} source={icon} />
    </View>
  );
};

NavHeaderTitle.propTypes = {
  icon: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  ImageStyles: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2AC0EF',
    borderRadius: 30,
  },
  Card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
export {NavHeaderTitle};
