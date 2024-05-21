import React from 'react'
import AuthRoute from './authRoute'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: "#ffffff" }}>
      <AuthRoute />
    </SafeAreaView>
  )
}