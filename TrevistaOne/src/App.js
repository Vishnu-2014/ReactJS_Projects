/* eslint-disable prettier/prettier */

import * as React from 'react';
import {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './Components/Welcome';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import OtpAuthentication from './Components/OtpAuthentication';
import OtpVerification from './Components/OtpVerification';
import Details from './Components/Details';
import {NavigationDrawerComponent} from './Components/DrawerComponents/NavigarionDrawerComponent';

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
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NavigationDrawerComponent"
              component={NavigationDrawerComponent}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Welcome"
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
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
