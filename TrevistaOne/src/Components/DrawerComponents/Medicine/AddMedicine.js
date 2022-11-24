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
      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'flex-start',
            left: 20,
          }}>
          {title}
        </Text>
        {type === fieldTypes.textInput ? (
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 6,
              width: '90%',
              height: 40,
              borderColor: '#C4C4C4',
              backgroundColor: title === 'Batch Number' ? '#F6F6F6' : false,
            }}
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
        <EvilIcons style={{fontSize: 35}} name="navicon" />
        <SearchBar
          placeholder="Search here"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}
          style={styles.TopSearchBarStyles}
        />
        <Image style={styles.ImageStyles} source={camera} />
      </View>

      <ScrollView
        style={{
          width: '85%',
          borderWidth: 1,
          borderRadius: 15,
          marginBottom: 10,
          borderColor: '#C4C4C4',
        }}>
        {addMedicineFields.map(item => {
          return CustomFields(item);
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
  datePickerStyle: {
    width: 260,
  },
});

export default AddMedicine;
