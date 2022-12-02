/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

//------------------Navigation_Components-----------------//
import 'react-native-gesture-handler';

import {DropDown} from '../shared';
import CustomSearchBar from '../../Components/shared/CustomSearchBar';

//------------------ICONS-----------------//
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//------------------IMAGES-----------------//
import MedicineSymbol from '../../images/MedicineSymbol.png';
import CustomTopView from '../shared/CustomTopView';

const MedicineList = () => {
  const CustomGridElements = props => {
    return <Text style={styles.TextBoxStyle}>{props}</Text>;
  };

  const HeadingText = text => {
    return <Text style={styles.HeadingTextStyles}>{text}</Text>;
  };

  return (
    <View style={styles.container}>
      <CustomTopView
        title="Medicine Type Information"
        ImageSource={MedicineSymbol}
      />
      <View style={styles.Card}>
        {HeadingText('Show')}
        <DropDown />
        {HeadingText('Search')}

        <CustomSearchBar />

        {HeadingText('Entries')}
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

      <Text style={styles.NextEntriesTextStyle}>Show 1 to 1 of 1 Entries</Text>

      <View style={styles.NextEntriesViewStyle}>
        <FontAwesome name="backward" style={styles.EntriesIconStyle} />
        <Text style={styles.EntriesCountStyle}>01</Text>
        <FontAwesome
          name="backward"
          style={[styles.EntriesIconStyle, {transform: [{rotateY: '180deg'}]}]}
        />
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
    top: 10,
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
  ImageStyles: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2AC0EF',
    borderRadius: 30,
  },
  TopSearchBarStyles: {
    width: 247,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  EntriesIconStyle: {
    fontSize: 20,
    backgroundColor: '#F6F6F6',
    color: '#666666',
    padding: 4,
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
  NextEntriesTextStyle: {
    top: 30,
    fontSize: 14,
    fontWeight: '500',
  },
  NextEntriesViewStyle: {
    flexDirection: 'row',
    top: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 100,
  },
  EntriesCountStyle: {
    backgroundColor: '#3CCCF9',
    padding: 4.5,
    color: '#ffffff',
  },
});

export default MedicineList;
