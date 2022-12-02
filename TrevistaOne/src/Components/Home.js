/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {View, StyleSheet, Image} from 'react-native';
import vector from '../images/Vector.png';
import trevista from '../images/TREVISTA.png';
import pharmacy from '../images/PharmacyStocksManagement.png';
const Home = () => {
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
});

export default Home;
