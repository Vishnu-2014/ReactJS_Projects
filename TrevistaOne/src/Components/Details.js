/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Camera from '../images/camera.png';

const box = element => {
  return (
    <>
      <Text style={styles.textStyles}>{element}</Text>
      <TextInput
        style={styles.textInputStyles}
        placeholder={element === 'Date Of Birth' ? 'DD-MM-YYYY' : element}
        placeholderTextColor="#D9D9D9"
        onChangeText={() => setIsFill('Fill')}
      />
    </>
  );
};

const Details = ({navigation}) => {
  const [isFill, setIsFill] = useState('empty');
  return (
    <>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1.2}}
        colors={['#2AC0EF', '#1937FE']}>
        <View style={styles.Container}>
          <View style={styles.circleStyle}>
            <Image source={Camera} />
          </View>
          <View style={styles.card}>
            {box('User Name')}
            {box('First Name')}
            {box('Last Name')}
            {box('Date Of Birth')}
          </View>
        </View>
        <TouchableOpacity
          style={styles.touchableStyles}
          onPress={() => navigation.navigate('SignIn')}>
          <View style={styles.buttonViewStyles}>
            <Text
              style={[
                styles.buttonTextStyles,
                isFill === 'Fill' ? {color: '#1937FE'} : false,
              ]}>
              Complete
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
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
  card: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: '5%',
  },
  textStyles: {
    fontSize: 14,
    width: '80%',
    color: 'white',
    top: '1%',
  },
  textInputStyles: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonViewStyles: {
    backgroundColor: 'white',
    width: '70%',
    height: '25%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableStyles: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyles: {
    fontSize: 20,
    fontWeight: '500',
    color: '#C8C8C8',
  },
});

export default Details;
