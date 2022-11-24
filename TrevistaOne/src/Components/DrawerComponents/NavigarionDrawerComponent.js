import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../HomePage';
import MedicineType from '../DrawerComponents/MedicineType';
import MedicineList from '../DrawerComponents/MedicineList';
import AddMedicine from '../DrawerComponents/AddMedicine';
import MedicineCategory from '../DrawerComponents/MedicineCategory';
import {NavHeaderTitle} from '../shared/NavHeaderTitle';
const Drawer = createDrawerNavigator();

const NavigationDrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTitle: () => {},
        }}
      />
      <Drawer.Screen
        name="MedicineType"
        component={MedicineType}
        options={{
          headerTitle: () => <NavHeaderTitle title="Medicine" />,
        }}
      />
      <Drawer.Screen name="MedicineList" component={MedicineList} />
      <Drawer.Screen name="AddMedicine" component={AddMedicine} />
      <Drawer.Screen name="MedicineCategory" component={MedicineCategory} />
    </Drawer.Navigator>
  );
};

export {NavigationDrawerComponent};
