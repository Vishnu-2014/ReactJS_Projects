/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import vector from '../images/VectorW.png';
const Welcome = () => {
  return (
    <View>
      <Image style={styles.Vector_styles} source={vector} />
      <Text style={styles.text_styles}>Welcome Back</Text>

      <linearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#4c669f', '#3b5998', '#192f6a']}>
        <TouchableOpacity style={styles.SignIn_button}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </linearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Vector_styles: {
    position: 'absolute',
    left: '31%',
  },
  text_styles: {
    position: 'absolute',
    width: 142,
    height: 68,
    left: 38,
    top: 335,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 34,
    color: '#3A3A3A',
  },

  SignIn_button: {
    position: 'absolute',
    width: 315,
    height: 72,
    left: 28,
    top: 563,
    backgroundColor: 'skyblue',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
