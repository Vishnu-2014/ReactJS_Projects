/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const DropDown = porps => {
  const countries = [1, 2, 3, 4, 5];
  return (
    <SelectDropdown
      data={countries}
      buttonStyle={styles.dropdown2BtnStyle}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
      renderDropdownIcon={isOpened => {
        return (
          <FontAwesome
            name={isOpened ? 'chevron-up' : 'chevron-down'}
            color={'#444'}
            size={18}
          />
        );
      }}
      dropdownIconPosition={'right'}
      dropdownStyle={styles.dropdown2DropdownStyle}
      rowStyle={styles.dropdown2RowStyle}
      rowTextStyle={styles.dropdown2RowTxtStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdown2BtnStyle: {
    width: '90%',
    height: 35,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
  },
  dropdown2RowStyle: {
    backgroundColor: '#333333',
    borderBottomColor: '#C5C5C5',
  },
  dropdown2RowTxtStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 12,
  },
});

DropDown.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export {DropDown};
