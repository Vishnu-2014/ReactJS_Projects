/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import CustomTopView from '../shared/CustomTopView';
import MedicineSymbol from '../../images/MedicineSymbol.png';

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

const MedicineType = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.MainView}>
        <CustomTopView title="Medicine Type" ImageSource={MedicineSymbol} />
        <View style={styles.Card}>
          {renderInputField('Type Name', 'Type Name')}
          {renderInputField('Create Date', 'dd/mm/yyyy')}
          {renderInputField('Created By', 'Vishnu Reddy')}

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
    justifyContent: 'center',
  },
  MainView: {
    flex: 1,
    alignItems: 'center',
  },
  MedicineTypeTextStyles: {
    fontSize: 25,
    color: '#ffffff',
  },
  linearGradient: {
    padding: 5,
    paddingHorizontal: 30,
  },
  Card: {
    height: 450,
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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

export default MedicineType;
