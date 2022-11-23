/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Alert, StyleSheet, Image} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {SearchBar} from 'react-native-elements';

import camera from '../../images/Profile.png';

const CustomTopView = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 25,
  },
  topBarStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
  },
  TopSearchBarStyles: {
    width: 247,
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

export default CustomTopView;
