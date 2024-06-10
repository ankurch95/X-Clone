import { ScrollView } from 'react-native'
import React from 'react'
import { TrendingCard } from '../../../../components'

const TrendingScreen = () => {
  const trendingItem = []
  for (let i = 0; i < 2; i++) {
    trendingItem.push(
      <TrendingCard />
    )
  }
  return (
    <ScrollView>
      {trendingItem}
    </ScrollView>
  )
}

export default TrendingScreen