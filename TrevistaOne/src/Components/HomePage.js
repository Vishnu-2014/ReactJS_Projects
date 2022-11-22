/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Pressable, StyleSheet, Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Medicine from '../images/Medicine.png';
import Delivery from '../images/Delivery.png';
import Cart from '../images/Cart.png';
import camera from '/Users/Trevista/Documents/GitHub/ReactNative_Projects/TrevistaOne/src/images/Profile.png';

import PropTypes from 'prop-types';
import SearchBar from 'react-native-dynamic-search-bar';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const CustomCard = props => {
  const {
    Heading = 'Medicine',
    SubHeading = 'Stock Total',
    ImageSource = 'Medicine',
    onpress = () => {},
    color1 = '#C491F9',
    color2 = '#B575F5',
  } = props;
  return (
    <Pressable onPress={onpress}>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[color1, color2]}>
        <Text style={styles.CardHeading}>{Heading}</Text>
        <Text style={styles.CardSubHeading}>{SubHeading}</Text>
        <Image style={styles.ImageStyle} source={ImageSource} />
      </LinearGradient>
    </Pressable>
  );
};
CustomCard.propTypes = {
  Heading: PropTypes.string.isRequired,
  SubHeading: PropTypes.string.isRequired,
  ImageSource: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
const HomePage = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.topBarStyles}>
        <EvilIcons style={{fontSize: 35}} name="navicon" />
        <SearchBar
          placeholder="Search here"
          onPress={() => Alert.alert('onPress')}
          onChangeText={text => console.log(text)}
          style={styles.TopSearchBarStyles}
        />
        <Image style={styles.ImageStyles} source={camera} />
      </View>

      <View style={styles.card}>
        <CustomCard
          Heading={'MEDICINES'}
          SubHeading={'Total Stock'}
          ImageSource={Medicine}
          color1={'#C491F9'}
          color2={'#B575F5'}
          onpress={() => Alert.alert('Medicine Card')}
        />
        <CustomCard
          Heading={'SUPPLIERS'}
          SubHeading={'10'}
          ImageSource={Delivery}
          color1={'#6AA2E4'}
          color2={'#697CE7'}
          onpress={() => Alert.alert('Suppliers Card')}
        />
        <CustomCard
          Heading={'REQUESTS'}
          SubHeading={'34'}
          ImageSource={Cart}
          color1={'#FEB482'}
          color2={'#FF9A8C'}
          onpress={() => Alert.alert('Requests Card')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    marginTop: 16,
    width: 335,
    height: 150,
  },
  ellipse1: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: 'white',
    opacity: 0.2,
    top: '-90%',
    left: '82%',
  },
  ellipse2: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: 'white',
    opacity: 0.2,
    top: '-105%',
    left: '76%',
  },
  card: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  topBarStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    top: 15,
  },
  CardHeading: {
    fontSize: 24,
    fontWeight: '700',
    top: '10%',
    left: '5%',
    color: 'white',
  },
  CardSubHeading: {
    fontSize: 24,
    fontWeight: '700',
    top: '40%',
    left: '5%',
    color: 'white',
  },
  ImageStyle: {
    left: '80%',
    top: '-35%',
  },
  TopSearchBarStyles: {
    width: 277,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  ImageStyles: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2AC0EF',
    borderRadius: 30,
  },
});

export default HomePage;
