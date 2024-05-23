import React from 'react'
import AuthRoute from './authRoute'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../theme/colors'
import HomeRoute from './homeRoute'

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: colors.WHITE_COLOR }}>
      {/* <AuthRoute /> */}
      <HomeRoute/>
    </SafeAreaView>
  )
}