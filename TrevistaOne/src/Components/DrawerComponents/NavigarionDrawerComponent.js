/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminDashboard from '../AdminDashboard';
import MedicineType from '../DrawerComponents/MedicineType';
import MedicineCategory from '../DrawerComponents/MedicineCategory';
import ManageSuppliers from './ManageSuppliers';
import MedicineList from '../DrawerComponents/MedicineList';
import AddMedicine from '../DrawerComponents/Medicine/AddMedicine';
import ManageMedicine from './Medicine/ManageMedicine';
import ReceivingInformation from './Receiving/ReceivingInformation';
import ManageReceivedItems from './Receiving/ManageReceivedItems';
import ReturningInformation from './Return/ReturningInformation';
import AddStock from './Stocks/AddStock';
import ManageStock from './Stocks/ManageStock';
import AddRequest from './Request/AddRequest';

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

      {/* Receiving Drawer Start's */}
      <Drawer.Screen
        name="Receiving Information"
        component={ReceivingInformation}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="Manage ReceivedItems"
        component={ManageReceivedItems}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      {/* Receiving Drawer End's */}

      <Drawer.Screen
        name="Returning Information"
        component={ReturningInformation}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />

      {/* Stock Drawer Start's */}
      <Drawer.Screen
        name="Add Stock"
        component={AddStock}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      <Drawer.Screen
        name="Manage Stock"
        component={ManageStock}
        options={{
          headerTitle: () => <NavHeaderTitle icon={Profile} />,
        }}
      />
      {/* Stock Drawer End's */}
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
