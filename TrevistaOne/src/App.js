/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './Components/Welcome';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import HomePage from './Components/HomePage';
import OtpAuthentication from './Components/OtpAuthentication';
import OtpVerification from './Components/OtpVerification';
import Details from './Components/Details';
import MedicineType from './Components/DrawerComponents/MedicineType';
import MedicineList from './Components/DrawerComponents/MedicineList';
import AddMedicine from './Components/DrawerComponents/AddMedicine';
import MedicineCategory from './Components/DrawerComponents/MedicineCategory';
import RecievingInformation from './Components/DrawerComponents/ReceivingInformation';

const Stack = createNativeStackNavigator();

const App = () => {
  const [splash, SetSplash] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetSplash(false);
    }, 2000);
  }, [splash]);

  return (
    <>
      {splash ? (
        <Home />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="RecievingInformation">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OtpAuthentication"
              component={OtpAuthentication}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OtpVerification"
              component={OtpVerification}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MedicineType"
              component={MedicineType}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MedicineList"
              component={MedicineList}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddMedicine"
              component={AddMedicine}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MedicineCategory"
              component={MedicineCategory}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RecievingInformation"
              component={RecievingInformation}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
