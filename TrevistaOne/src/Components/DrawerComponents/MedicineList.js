/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Alert, Text, Image} from 'react-native';

import {DropDown} from '../shared';
import SearchBar from 'react-native-dynamic-search-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Camera from 'C:Users/Trevista/Documents/GitHub/ReactNative_Projects/TrevistaOne/src/images';

const MedicineList = () => {
  const CustomGridElements = props => {
    return <Text style={styles.TextBoxStyle}>{props}</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBarStyles}>
        <EvilIcons name="navicon" />
        <SearchBar
          placeholder="Search here"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}
        />
        <View style={styles.circleStyle}>
          <Image source={Camera} />
        </View>
      </View>
      <View style={styles.Card}>
        <Text style={styles.HeadingTextStyles}>Show</Text>
        <DropDown style={{width: 100}} />
        <Text style={styles.HeadingTextStyles}>Search</Text>
        <SearchBar
          placeholder="Search here"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}
        />
        <Text style={styles.HeadingTextStyles}>Entries</Text>
        <View style={styles.GridBoxStyles}>
          {CustomGridElements('Type Name')}
          {CustomGridElements('Type 1')}
          {CustomGridElements('Date Created')}
          {CustomGridElements('03-08-2022')}
          {CustomGridElements('Created By')}
          {CustomGridElements('Vishnu Reddy')}
          {CustomGridElements('Actions')}
          <View style={styles.ViewBoxStyle}>
            <FontAwesome5 name="edit" style={styles.EditIconStyle} />
            <MaterialCommunityIcons
              name="delete"
              style={styles.DeleteIconStyle}
            />
          </View>
        </View>
      </View>
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
    backgroundColor: 'yellow',
    width: '100%',
    height: '8%',
  },
  Card: {
    height: 425,
    width: 335,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: 130,
  },
  TextBoxStyle: {
    width: 130,
    height: 45,
    textAlign: 'center',
    margin: 2,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  GridBoxStyles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ViewBoxStyle: {
    width: 130,
    height: 45,
    margin: 2,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  HeadingTextStyles: {
    color: '#757272',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'baseline',
    left: 20,
    top: 10,
  },
  EditIconStyle: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#0E9243',
    padding: 7,
    borderRadius: 6,
  },
  DeleteIconStyle: {
    fontSize: 25,
    color: '#ffffff',
    backgroundColor: '#D3303E',
    borderRadius: 6,
    padding: 5,
  },
  circleStyle: {
    height: 130,
    width: 130,
    borderWidth: 3,
    borderRadius: 250,
    borderColor: '#2AC0EF',
    top: '5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MedicineList;
