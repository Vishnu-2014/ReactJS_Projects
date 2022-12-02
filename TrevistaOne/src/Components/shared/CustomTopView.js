/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTopView = ({title, ImageSource}) => {
  return (
    <View style={styles.MedicineTypeBoxStyles}>
      <Ionicons style={styles.BackIconStyles} name="arrow-back" />
      <Text style={styles.MedicineTypeTextStyles}>{title}</Text>
      <Image source={ImageSource} />
    </View>
  );
};

CustomTopView.propTypes = {
  title: PropTypes.string.isRequired,
  ImageSource: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 25,
  },
  topBarStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
  },
  TopSearchBarStyles: {
    width: 247,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  ImageStyles: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2AC0EF',
    borderRadius: 30,
  },
  MedicineTypeBoxStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    top: 10,
  },
  BackIconStyles: {
    fontSize: 35,
    color: '#666666',
  },
  MedicineTypeTextStyles: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666666',
  },
});

export default CustomTopView;
