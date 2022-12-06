/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

//Hi this is Vishnu

import {DropDown} from '../../shared/DropDown';
import MedicineSymbol from '../../../images/MedicineSymbol.png';
import CustomTopView from '../../shared/CustomTopView';
import CustomDropdown from '../../shared/CustomDropdown';

import {addReceiveFields, fieldTypes} from '../../../utils/Constants';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ManageMedicine = () => {
  return (
    <>
      <CustomTopView title="Manage Medicine" ImageSource={MedicineSymbol} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{alignItems: 'center'}}>
        <Text style={[styles.CustomFieldsTextStyles, {left: 40, top: 10}]}>
          Show
        </Text>
        <View style={{width: '85%', top: 15, alignItems: 'center'}}>
          <DropDown />
        </View>
        <Text style={[styles.CustomFieldsTextStyles, {left: 35, top: 20}]}>
          Entries
        </Text>
        <CustomDropdown />
        <CustomDropdown />
        <CustomDropdown />
        <CustomDropdown />
        <CustomDropdown />
        <CustomDropdown />
        <CustomDropdown />
        <CustomDropdown />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 15,
  },
  ScrollViewStyles: {
    flex: 1,
    top: 30,
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
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
  CustomFieldsTextStyles: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'flex-start',
    left: 20,
  },
  CustomFieldsViewStyles: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  CustomFieldsTextInputStyles: {
    borderWidth: 1,
    borderRadius: 6,
    width: '90%',
    height: 40,
    borderColor: '#C4C4C4',
  },
});

export default ManageMedicine;
