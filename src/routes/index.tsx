import React from 'react'
import AuthRoute from './authRoute'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../theme/colors'
import DrawerRoute from './drawerRoute'
import { StatusBar } from 'react-native'

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE_COLOR }}>
      <StatusBar backgroundColor={colors.WHITE_COLOR} barStyle={'dark-content'}/>
      {/* <AuthRoute /> */}
      {/* <HomeRoute/> */}
      <DrawerRoute/>
    </SafeAreaView>
  )
}