/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  Pressable,
} from 'react-native';

import SearchBar from 'react-native-dynamic-search-bar';

import {DropDown} from '../shared';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import camera from '/Users/Trevista/Documents/GitHub/ReactNative_Projects/TrevistaOne/src/images/Profile.png';

const RecievingInformation = () => {
  const CustomFields = props => {
    return (
      <View style={styles.CustomFieldsViewStyle}>
        <Text style={styles.CustomFieldsTextStyle}>{props}</Text>
        {props === 'Batch Number' ? (
          <TextInput
            style={styles.CustomFieldsTextInputStyle}
            value={props === 'Batch Number' ? 'B234Rtsh' : false}
          />
        ) : props === 'Date Recieved' ? (
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

      <ScrollView style={styles.ScrollViewStyles}>
        {CustomFields('Batch Number')}
        {CustomFields('Medicine Name')}
        {CustomFields('Supplier Name')}
        {CustomFields('Price')}
        {CustomFields('Quantity')}
        {CustomFields('Amount')}
        {CustomFields('Remarks')}
        {CustomFields('Reference Number')}
        {CustomFields('Date Recieved')}
        {CustomFields('Processed By')}

        <Pressable style={styles.ButtonStyles}>
          <Text style={styles.ButtonTextStyles}>Save</Text>
        </Pressable>
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
  ScrollViewStyles: {
    width: '85%',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#C4C4C4',
  },
  ButtonStyles: {
    backgroundColor: '#2AC0EF',
    width: '80%',
    height: 40,
    marginBottom: 40,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonTextStyles: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },

  CustomFieldsViewStyle: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  CustomFieldsTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'flex-start',
    left: 20,
  },
  CustomFieldsTextInputStyle: {
    borderWidth: 1,
    borderRadius: 6,
    width: '90%',
    height: 40,
    borderColor: '#C4C4C4',
  },
});

export default RecievingInformation;
