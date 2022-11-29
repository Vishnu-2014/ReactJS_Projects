/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../HomePage';
import MedicineType from '../DrawerComponents/MedicineType';
import MedicineList from '../DrawerComponents/MedicineList';
import AddMedicine from '../DrawerComponents/Medicine/AddMedicine';
import MedicineCategory from '../DrawerComponents/MedicineCategory';
import ManageSuppliers from './ManageSuppliers';
import {NavHeaderTitle} from '../shared/NavHeaderTitle';
import Profile from '../../images/Profile.png';
const Drawer = createDrawerNavigator();

const NavigationDrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="MedicineType"
        component={MedicineType}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="MedicineList"
        component={MedicineList}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="AddMedicine"
        component={AddMedicine}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="MedicineCategory"
        component={MedicineCategory}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="ManageSuppliers"
        component={ManageSuppliers}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export {NavigationDrawerComponent};
