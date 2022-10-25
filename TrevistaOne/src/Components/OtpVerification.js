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

const OtpVerification = ({navigation, route}) => {
  const number = '9825373528';
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imageStyles} source={otpImage} />
        <Text style={styles.otpStyles}>OTP Verification</Text>

        <Text style={{top: '15%'}}>Enter The Otp Sent To +91{number}</Text>
        <View style={styles.numberStyle}>
          <TextInput style={styles.textInputStyle}></TextInput>
          <TextInput style={styles.textInputStyle}></TextInput>
          <TextInput style={styles.textInputStyle}></TextInput>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>

        <View style={{flexDirection: 'row', top: '38%'}}>
          <Text>Didn't You Recieve Otp? </Text>
          <TouchableOpacity>
            <Text style={{color: 'purple', fontSize: 15}}>RESEND OTP</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title={'Verify'}
          onPress={() => navigation.navigate('Details')}
          buttonExtraStyle={styles.getotpStyle}
        />
      </View>

      {/* <TouchableOpacity
        style={{backgroundColor: 'white'}}
        onPress={() => navigation.navigate('Details')}>
        <View style={styles.button_View}>
          <Text style={styles.getotpStyle}>VERIFY</Text>
        </View>
      </TouchableOpacity> */}
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
    top: '7%',
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
    flexDirection: 'row',
    top: '28%',
    justifyContent: 'space-around',
    width: '70%',
  },
  textInputStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#2743FD',
  },
  imageStyles: {
    width: 300,
    height: 300,
    top: '4%',
  },
  getotpStyle: {color: 'white', fontSize: 20, top: '25%', fontFamily: 'lato'},
});

export default OtpVerification;
