/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Vector from '../images/VectorW.png';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomFields = Input => {
  return (
    <>
      <Text style={styles.TextColor}>{Input}</Text>
      <TextInput
        underlineColorAndroid={'#000'}
        placeholder={
          Input === 'Email Address' ? 'Enter email' : 'Enter Password'
        }
      />
    </>
  );
};

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.BackIconStyles}
        onPress={() => navigation.navigate('Welcome')}
        name="arrow-back"
      />
      <Image style={styles.Vector_styles} source={Vector} />
      <View style={styles.main}>
        <View style={styles.card}>
          <Text style={styles.sign_in_styles}>Sign Up</Text>

          {CustomFields('Email Address')}
          {CustomFields('Password')}

          <Text style={{color: '#2847FC'}}>Forget Password?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('OtpVerification')}>
            <View style={styles.button_View}>
              <Text style={styles.buttonTextStyles}>Sign Up</Text>
              <Ionicons style={styles.ArrowIconStyles} name="arrow-back" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.SignUpViewStyles}>
          <Text>Don't Have An Account? </Text>
          <Text style={{color: '#201C9C'}}>Sign In</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Vector_styles: {
    right: -124,
  },

  button_styles: {
    backgroundColor: '#2AC0EF',
    borderRadius: 20,
  },

  button_View: {
    width: '90%',
    height: 50,
    backgroundColor: '#2AC0EF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 28,
  },

  main: {
    flex: 1,
    alignItems: 'center',
  },

  card: {
    width: 340,
    height: 400,
    justifyContent: 'space-between',
  },

  sign_in_styles: {
    width: 119,
    height: 34,
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    color: '#3A3A3A',
  },

  email_style: {
    position: 'absolute',
    width: 86,
    height: 17,
    left: '10%',
    top: 380,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#B9B9B9',
  },

  email_textInput_styles: {
    borderBottomWidth: 2,
    width: '100%',
    // marginLeft: '10%',
    // marginRight: '20%',
  },
  TextColor: {
    color: '#B9B9B9',
    marginBottom: -30,
    fontWeight: '500',
    fontSize: 16,
    left: 5,
  },
  BackIconStyles: {
    position: 'absolute',
    fontSize: 40,
    left: 20,
    top: 30,
  },
  ArrowIconStyles: {
    fontSize: 35,
    transform: [{rotate: '180deg'}],
    right: 20,
    color: '#fff',
  },
  buttonTextStyles: {
    left: 30,
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  SignUpViewStyles: {top: 40, flexDirection: 'row'},
});

export default SignUp;
