/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminDashboard from '../AdminDashboard';
import MedicineType from '../DrawerComponents/MedicineType';
import MedicineList from '../DrawerComponents/MedicineList';
import AddMedicine from '../DrawerComponents/Medicine/AddMedicine';
import MedicineCategory from '../DrawerComponents/MedicineCategory';
import ManageSuppliers from './ManageSuppliers';
import ReceivingInformation from './Receiving/ReceivingInformation';
import AddRequest from './Request/AddRequest';
import AddStock from './Stocks/AddStock';
import ReturningInformation from './Return/ReturningInformation';
import ManageMedicine from './Medicine/ManageMedicine';

import {NavHeaderTitle} from '../shared/NavHeaderTitle';

import Profile from '../../images/Profile.png';
const Drawer = createDrawerNavigator();

const NavigationDrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="AdminDashboard">
      <Drawer.Screen
        name="AdminDashboard"
        component={AdminDashboard}
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
        name="MedicineCategory"
        component={MedicineCategory}
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
        name="Suppliers"
        component={ManageSuppliers}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      {/* Medicine drawer start */}
      <Drawer.Screen
        name="Add Medicine"
        component={AddMedicine}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="Manage Medicine"
        component={ManageMedicine}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      {/* Medicine drawer end */}

      <Drawer.Screen
        name="Receiving Information"
        component={ReceivingInformation}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="Returning Information"
        component={ReturningInformation}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="Add Stock"
        component={AddStock}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="Add Request"
        component={AddRequest}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export {NavigationDrawerComponent};
