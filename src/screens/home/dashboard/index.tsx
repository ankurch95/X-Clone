import { View, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '../../../components/Header';
import { TweetCard } from '../../../components';

const DashboardScreen = () => {
  return (
      <View>
        <Header
          title={''}
          placeholderText={''}
        />

        <ScrollView>
          <View style={{ marginBottom: 100 }}>
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
          </View>
        </ScrollView>
      </View>
  )
}

export default DashboardScreen;