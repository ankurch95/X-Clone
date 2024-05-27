import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './customDrawerContent';
import { Header } from '../components/Header';
import HomeRoute from './homeRoute';

const Drawer = createDrawerNavigator();
const DrawerRoute = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen
      name="Dashboard"
      component={HomeRoute}
      options={{ headerTitle: (props) => <Header placeholderText={''} {...props} /> }} />
  </Drawer.Navigator>
  )
}

export default DrawerRoute