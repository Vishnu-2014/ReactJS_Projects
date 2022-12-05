/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const title = 'Vishnu';
const name = 'Paracetemol';
const specs = 'specs';
const category = '01';
const supplier = 'S-1';
const measurements = '100mg';
const price = '15';
const qty = '100';
const expiryDate = '03/04/2022';
const createdBy = 'Vishnu Reddy';

const CustomDropdown = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.viewStyles}
        onPress={() => setShowContent(!showContent)}>
        <Text style={styles.textStyles}>{title}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          style={[showContent === true ? styles.DownArrow : false]}
        />
      </Pressable>

      {showContent && (
        <View style={styles.body}>
          <View style={styles.dropdownInsideViewStyles}>
            <Text style={styles.HeadingTextStyles}>Medicine Info</Text>
            <Text style={styles.SubHeadingTextStyles}>
              NAME: <Text style={styles.ValueStyles}>{name}</Text>
            </Text>
            <Text style={styles.SubHeadingTextStyles}>
              SPECS: <Text style={styles.ValueStyles}>{specs}</Text>
            </Text>
            <Text style={styles.SubHeadingTextStyles}>
              CATEGORY: <Text style={styles.ValueStyles}>{category}</Text>
            </Text>
            <Text style={styles.SubHeadingTextStyles}>
              SUPPLIER: <Text style={styles.ValueStyles}>{supplier}</Text>
            </Text>
            <Text style={styles.SubHeadingTextStyles}>
              MEASUREMENTS:{' '}
              <Text style={styles.ValueStyles}>{measurements}</Text>
            </Text>
          </View>

          <View style={styles.dropdownInsideViewStyles}>
            <Text style={styles.SubHeadingTextStyles}>
              Price: <Text style={styles.ValueStyles}>INR {price}</Text>
            </Text>
          </View>
          <View style={styles.dropdownInsideViewStyles}>
            <Text style={styles.SubHeadingTextStyles}>
              Qty: <Text style={styles.ValueStyles}>{qty}</Text>
            </Text>
          </View>
          <View style={styles.dropdownInsideViewStyles}>
            <Text style={styles.SubHeadingTextStyles}>
              Expiry Date: <Text style={styles.ValueStyles}>{expiryDate}</Text>
            </Text>
          </View>
          <View style={styles.dropdownInsideViewStyles}>
            <Text style={styles.SubHeadingTextStyles}>
              Created By: <Text style={styles.ValueStyles}>{createdBy}</Text>
            </Text>
          </View>
          <View style={styles.ActionViewStyles}>
            <Text style={styles.SubHeadingTextStyles}>Action:</Text>
            <View style={styles.ViewBoxStyle}>
              <FontAwesome5 name="edit" style={styles.EditIconStyle} />
              <MaterialCommunityIcons
                name="delete"
                style={styles.DeleteIconStyle}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  },
  viewStyles: {
    width: '80%',
    height: '5%',
    backgroundColor: '#2AC0EF',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  textStyles: {
    fontSize: 20,
    fontWeight: '500',
  },
  body: {
    width: '80%',
    borderWidth: 1,
  },
  DownArrow: {
    transform: [{rotate: '90deg'}],
  },
  ViewBoxStyle: {
    width: 130,
    height: 45,
    margin: 2,
    borderColor: '#C4C4C4',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: '10%',
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
  dropdownInsideViewStyles: {
    borderBottomWidth: 1,
    paddingHorizontal: '3%',
  },
  ActionViewStyles: {
    paddingHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeadingTextStyles: {fontSize: 28, fontWeight: '500'},
  SubHeadingTextStyles: {fontSize: 18, fontWeight: '500'},
  ValueStyles: {fontSize: 14, color: '#2AC0EF'},
});

export default CustomDropdown;
