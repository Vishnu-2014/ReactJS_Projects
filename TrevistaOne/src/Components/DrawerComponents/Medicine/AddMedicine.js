/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {react, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

import {SearchBar} from 'react-native-elements';

import DropDown from '../../shared/DropDown.js';
import {addMedicineFields, fieldTypes} from '../../../utils/Constants';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import camera from '../../../images/Profile.png';

const AddMedicine = () => {
  const CustomFields = item => {
    const {title, type} = item;
    return (
      <View style={styles.CustomFieldsViewStyles}>
        <Text style={styles.CustomFieldsTextStyles}>{title}</Text>
        {type === fieldTypes.textInput ? (
          <TextInput
            style={[
              styles.CustomFieldsTextInputStyles,
              {backgroundColor: title === 'Batch Number' ? '#F6F6F6' : false},
            ]}
            value={title === 'Batch Number' ? 'B234Rtsh' : false}
          />
        ) : type === fieldTypes.date ? (
          <Text>Date Element</Text>
        ) : (
          <DropDown />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBarStyles}>
        {/* <SearchBar
          placeholder="Type Here..."
          containerStyle={styles.SearchBarContainerStyle}
          inputContainerStyle={styles.SearchBarInputContainerStyle}
          searchIcon={null}
        /> */}
        <Image style={styles.ImageStyles} source={camera} />
      </View>

      <ScrollView style={styles.ScrollViewStyles}>
        {addMedicineFields.map(item => {
          CustomFields(item);
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topBarStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
  },
  TopSearchBarStyles: {
    width: '70%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyles: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2AC0EF',
    borderRadius: 30,
  },
  ScrollViewStyles: {
    width: '85%',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#C4C4C4',
  },
  CustomFieldsTextInputStyles: {
    borderWidth: 1,
    borderRadius: 6,
    width: '90%',
    height: 40,
    borderColor: '#C4C4C4',
  },
  CustomFieldsTextStyles: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'flex-start',
    left: 20,
  },
  CustomFieldsViewStyles: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  SearchBarContainerStyle: {
    backgroundColor: '#ffffff',
    width: '70%',
    borderRadius: 20,
    borderWidth: 1,
  },
  SearchBarInputContainerStyle: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default AddMedicine;
