import React from 'react'
import AuthRoute from './authRoute'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../theme/colors'
import HomeRoute from './homeRoute'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Header } from '../components/Header'
import CustomDrawerContent from './customDrawerContent'

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE_COLOR }}>
      {/* <AuthRoute /> */}
      {/* <HomeRoute/> */}
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
    </SafeAreaView>
  )
}