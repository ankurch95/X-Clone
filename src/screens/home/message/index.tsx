import { View, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '../../../components/Header'
import { FabButton, MessageCard } from '../../../components'

const MessageScreen = () => {

  const msgItem = [];
  for (let i = 0; i < 10; i++) {
    msgItem.push(
        <MessageCard key={i} />
    );
  }
  
  return (
    <>
      <Header
        title={'Message'}
        placeholderText={''}
      />

      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          {msgItem}
        </View>
      </ScrollView>

      <FabButton
      icon='application-edit-outline'
      onPress={() => console.log('sdfsdf')}/>
    </>
  )
}

export default MessageScreen;

