/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = () => {
  return (
    <>
      <View style={styles.topBarStyles}>
        <Text>menu</Text>
        <Text>search</Text>
        <Text>profile</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity>
          <LinearGradient
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#C491F9', '#B575F5']}>
            <Text>Vishnu</Text>
            <View style={styles.ellipse}></View>
            <View style={styles.ellipse}></View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    marginTop: 16,
    width: 335,
    height: 150,
  },
  ellipse: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: 'white',
    opacity: 0.2,
  },
  card: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    top: '5%',
  },
  topBarStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: '100%',
    height: '8%',
  },
});

export default HomePage;
