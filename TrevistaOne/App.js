/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './Components/Welcome';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Home />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff333',
  },
});

export default App;
