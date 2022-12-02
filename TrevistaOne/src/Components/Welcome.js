/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import vector from '../images/VectorW.png';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.Vector_styles} source={vector} />
      <Text style={styles.text_styles}>Welcome Back</Text>
      <View style={styles.buttonViewStyle}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonTextStyle}>SIGN IN</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonTextStyle}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  Vector_styles: {
    position: 'absolute',
    left: '31%',
  },

  text_styles: {
    width: 180,
    left: 38,
    top: 305,
    fontWeight: '500',
    fontSize: 35,
    color: '#000',
  },

  buttonViewStyle: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-around',
    top: 450,
  },

  buttonStyle: {
    width: '40%',
    height: '100%',
    backgroundColor: '#2AC0EF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Welcome;
