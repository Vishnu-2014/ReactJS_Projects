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
import {DropDown} from '../shared';
import SearchBar from 'react-native-dynamic-search-bar';
import LinearGradient from 'react-native-linear-gradient';

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
    <ScrollView style={styles.Container}>
      <View style={styles.MainView}>
        <LinearGradient
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#2AC0EF', '#58D8F9']}>
          <Text style={styles.MedicineTypeTextStyles}>Medicine Type</Text>
        </LinearGradient>
        <View style={styles.Card}>
          <Text style={styles.MedicineTypeInfoTextStyle}>
            Medicine Type Information
          </Text>
          {renderInputField('Type Name', 'Type Name')}
          {renderInputField('Create Date', 'dd/mm/yyyy')}
          {renderInputField('Created By', 'Vishnu Reddy')}

          <Button color={'#2AC0EF'} title="Save" />
        </View>
        <View style={styles.Card}>
          <DropDown />
          <SearchBar
            placeholder="Search here"
            onPress={() => Alert.alert('onPress')}
            onChangeText={text => console.log(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  MainView: {
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
    height: 350,
    width: '80%',
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    textAlign: 'left',
  },
  MedicineTypeInfoTextStyle: {fontSize: 20, color: '#2AC0EF'},
});

export {MedicineType};
