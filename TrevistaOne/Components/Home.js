/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Home = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.logo_image_styles}>
        <Image source={require('../Assets/Vector.png')} />
      </TouchableOpacity>
      <Image
        style={styles.image_Styles}
        source={require('../Assets/TREVISTA.png')}
      />
      <Image
        style={styles.pharmacy_image_styles}
        source={require('../Assets/PharmacyStocksManagement.png')}
      />
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
  image_Styles: {
    position: 'absolute',
    top: 419,
    left: 126,
  },
  logo_image_styles: {
    position: 'absolute',
    left: '44.53%',
    right: '44.27%',
    top: '44.7%',
    bottom: '49.96%',
  },
  pharmacy_image_styles: {
    position: 'absolute',
    height: 8,
    width: 123,
    left: 126,
    top: 441.35,
  },
});

export default Home;
