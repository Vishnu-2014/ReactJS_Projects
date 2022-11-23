/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {View, StyleSheet, Image} from 'react-native';
import vector from '../images/Vector.png';
import trevista from '../images/TREVISTA.png';
import pharmacy from '../images/PharmacyStocksManagement.png';
import {CustomButton} from './shared/CustomButton';
const Home = ({navigation}) => {
  const renderButtons = () => {
    return (
      <View style={styles.buttonView}>
        <CustomButton
          title={'SignIn'}
          onPress={() => navigation.navigate('SignIn')}
        />
        <CustomButton
          title={'SignUp'}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <Image source={vector} />
      <Image source={trevista} />
      <Image source={pharmacy} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
