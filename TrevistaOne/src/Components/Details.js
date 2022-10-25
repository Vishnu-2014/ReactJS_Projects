/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import GradientImage from '../images/GradientImage.png';
import Camera from '../images/camera.png';

const box = element => {
  return (
    <>
      <Text style={styles.textStyles}>{element}</Text>
      <TextInput
        style={styles.textInputStyles}
        placeholder={element}></TextInput>
    </>
  );
};

const Details = ({navigation}) => {
  return (
    <>
      <ImageBackground style={styles.MainImage} source={GradientImage}>
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
            <Text style={styles.buttonTextStyles}>Complete</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  MainImage: {
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
    width: '60%',
    height: '30%',
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
    color: '#1F66F9',
  },
});

export default Details;
