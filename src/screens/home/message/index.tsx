import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../../components/Header'

const MessageScreen = () => {
  return (
    <View>
      <Header
        title={'Message'}
        placeholderText={''}
      />
    </View>
  )
}

export default MessageScreen