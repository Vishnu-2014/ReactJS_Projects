import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, StyleSheet, Text} from 'react-native';
import {logoColor, white} from '../../themes/colors';

const CustomButton = props => {
  const {
    title = 'Button',
    onPress = () => {},
    titleExtraStyle, // if we want to override the default style then pass
    buttonExtraStyle,
  } = props;
  return (
    <Pressable style={[styles.buttonStyle, buttonExtraStyle]} onPress={onPress}>
      <Text style={[styles.textStyle, titleExtraStyle]}>{title}</Text>
    </Pressable>
  );
};

CustomButton.propTypes = {
  buttonExtraStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  titleExtraStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 16,
    backgroundColor: logoColor,
    borderRadius: 10,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textStyle: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export {CustomButton};
