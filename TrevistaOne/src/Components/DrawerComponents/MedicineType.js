/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const box = (text, textInput) => {
  return (
    <>
      <Text style={{fontSize: 15, color: '#000000'}}>{text}</Text>
      <TextInput
        style={styles.textInputStyles}
        placeholder={textInput}
        underlineColorAndroid={'black'}></TextInput>
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
          <Text style={{fontSize: 20, color: '#2AC0EF', left: 30}}>
            Medicine Type Information
          </Text>
          {box('Type Name', 'Type Name')}
          {box('Create Date', 'dd/mm/yyyy')}
          {box('Created By', 'Suresh Buddiga')}
          <Button color={'#2AC0EF'} title="Save" />
        </View>
        <View style={styles.Card}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginVertical: 20,
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
    alignItems: 'flex-start',
    height: 400,
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 20,
  },
  textInputStyles: {
    width: '80%',
    marginBottom: 30,
  },
});

export {MedicineType};
