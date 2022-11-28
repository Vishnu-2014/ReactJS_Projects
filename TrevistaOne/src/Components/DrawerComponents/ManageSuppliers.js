/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import CustomTopView from '../shared/CustomTopView';

const renderInputField = (text, textInput) => {
  return (
    <>
      <Text
        style={{
          fontSize: 18,
          color: '#757272',
          alignSelf: 'flex-start',
          left: 20,
          fontWeight: '500',
        }}>
        {text}
      </Text>
      <TextInput
        style={[
          styles.textInputStyles,
          {
            backgroundColor:
              textInput === 'Vishnu Reddy' ? '#E5E5E5' : '#ffffff',
            borderWidth: textInput === 'Vishnu Reddy' ? 0 : 1,
          },
        ]}
        placeholder={textInput}
        placeholderTextColor="#666666"
      />
    </>
  );
};

const ManageSuppliers = () => {
  return (
    <View style={styles.Container}>
      <CustomTopView />
      <View style={styles.MainView}>
        <Text style={styles.MedicineTypeTextStyles}>Manage Suppliers</Text>
        <View style={styles.Card}>
          {renderInputField('Type Name', 'Type Name')}
          {renderInputField('Create Date', 'dd/mm/yyyy')}
          {renderInputField('Created By', 'Vishnu Reddy')}

          <TextInput multiline={true} />

          <Button color={'#2AC0EF'} title="Save" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  MainView: {
    alignItems: 'center',
    bottom: 100,
  },
  MedicineTypeTextStyles: {
    fontSize: 25,
    bottom: 120,
    color: '#757272',
  },

  Card: {
    height: 420,
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    bottom: 100,
  },
  textInputStyles: {
    width: '90%',
    height: 41,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    textAlign: 'left',
  },
  MedicineTypeInfoTextStyle: {
    fontSize: 20,
    color: '#2AC0EF',
  },
});

export default ManageSuppliers;
