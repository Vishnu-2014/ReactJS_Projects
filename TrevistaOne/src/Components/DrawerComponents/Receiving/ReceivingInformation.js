/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

//Hi this is Vishnu

import {DropDown} from '../../shared/DropDown';
import MedicineSymbol from '../../../images/MedicineSymbol.png';
import CustomTopView from '../../shared/CustomTopView';

import {addReceiveFields, fieldTypes} from '../../../utils/Constants';

const ReceivingInformation = () => {
  const CustomFields = item => {
    const {title, type} = item;
    return (
      <View style={styles.CustomFieldsViewStyles}>
        <Text style={styles.CustomFieldsTextStyles}>{title}</Text>
        {type === fieldTypes.textInput ? (
          <TextInput
            style={[
              styles.CustomFieldsTextInputStyles,
              {backgroundColor: title === 'Batch Number' ? '#F6F6F6' : false},
            ]}
            value={title === 'Batch Number' ? 'B234Rtsh' : false}
          />
        ) : type === fieldTypes.date ? (
          <Text>Date Element</Text>
        ) : (
          <DropDown />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CustomTopView
        title="Receiving Information"
        ImageSource={MedicineSymbol}
      />
      <ScrollView style={styles.ScrollViewStyles}>
        {addReceiveFields.map(item => {
          return CustomFields(item);
        })}

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ScrollViewStyles: {
    width: '85%',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 20,
    borderColor: '#C4C4C4',
    backgroundColor: '#fff',
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

export default ReceivingInformation;
