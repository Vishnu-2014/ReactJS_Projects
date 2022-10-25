/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import otpImage from '../images/OtpImage.png';
import {CustomButton} from './shared/CustomButton';

const OtpAuthentication = ({navigation, route}) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imageStyles} source={otpImage} />
        <Text style={styles.otpStyles}>OTP Verification</Text>
        <View style={styles.textStyleView}>
          <Text style={styles.textStyle}>We Will Send You One Time</Text>
          <Text style={styles.textStyle}>Password To This Mobile Number</Text>
        </View>
        <View style={styles.numberStyle}>
          <Text>Enter Mobile Number</Text>
          <TextInput
            style={styles.textInputStyle}
            keyboardType="number-pad"></TextInput>
        </View>
        <CustomButton
          title={'Get Otp'}
          onPress={() => navigation.navigate('OtpVerification')}
          buttonExtraStyle={styles.getotpStyle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  otpStyles: {
    fontFamily: 'lato',
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
    top: '8%',
  },
  textStyleView: {
    alignItems: 'center',
    justifyContent: 'space-around',
    top: '12%',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  button_View: {
    width: '80%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2AC0EF',
    borderRadius: 28,
    bottom: '100%',
    left: '10%',
  },
  numberStyle: {
    top: '19%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  textInputStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#2743FD',
    width: '80%',
    alignContent: 'center',
  },
  imageStyles: {
    width: 300,
    height: 300,
    top: '4%',
  },
  getotpStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'lato',
    top: '22%',
  },
});

export default OtpAuthentication;
