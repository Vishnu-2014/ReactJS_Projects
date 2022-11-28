import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../HomePage';
import MedicineType from '../DrawerComponents/MedicineType';
import MedicineList from '../DrawerComponents/MedicineList';
import AddMedicine from '../DrawerComponents/Medicine/AddMedicine';
import MedicineCategory from '../DrawerComponents/MedicineCategory';
import {NavHeaderTitle} from '../shared/NavHeaderTitle';
const Drawer = createDrawerNavigator();

const NavigationDrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen
        name="MedicineType"
        component={MedicineType}
        options={{
          headerTitle: () => <NavHeaderTitle title="Medicine" />,
        }}
      />
      <Drawer.Screen
        name="MedicineList"
        component={MedicineList}
        options={{
          headerTitle: () => <NavHeaderTitle title="Medicine" />,
        }}
      />
      <Drawer.Screen
        name="AddMedicine"
        component={AddMedicine}
        options={{
          headerTitle: () => <NavHeaderTitle title="Medicine" />,
        }}
      />
      <Drawer.Screen
        name="MedicineCategory"
        component={MedicineCategory}
        options={{
          headerTitle: () => <NavHeaderTitle title="Medicine" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export {NavigationDrawerComponent};
