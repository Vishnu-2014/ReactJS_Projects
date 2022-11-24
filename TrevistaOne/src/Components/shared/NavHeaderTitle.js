import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import {logoColor, white} from '../../themes/colors';

const NavHeaderTitle = props => {
  const {title = 'Button', icon, titleExtraStyle} = props;
  return (
    <View style={styles.buttonStyle}>
      <Text style={[styles.textStyle, titleExtraStyle]}>{title}</Text>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  textStyle: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export {NavHeaderTitle};
