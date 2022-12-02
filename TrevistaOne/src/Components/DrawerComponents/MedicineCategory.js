/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import CustomTopView from '../shared/CustomTopView';
import MedicineSymbol from '../../images/MedicineSymbol.png';

const renderInputField = (text, textInput) => {
  return (
    <>
      <Text style={styles.renderInputFieldTextStyle}>{text}</Text>
      <TextInput
        style={[
          styles.renderInputFieldtextInputStyles,
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

const MedicineCategory = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.MainView}>
        <CustomTopView title="Medicine Category" ImageSource={MedicineSymbol} />
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
  },
  MainView: {
    flex: 1,
    alignItems: 'center',
  },
  MedicineTypeTextStyles: {
    fontSize: 25,
    top: 20,
    color: '#757272',
  },

  Card: {
    top: 40,
    height: 420,
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  renderInputFieldtextInputStyles: {
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
  renderInputFieldTextStyle: {
    fontSize: 18,
    color: '#757272',
    alignSelf: 'flex-start',
    left: 20,
    fontWeight: '500',
  },
});

export default MedicineCategory;
