import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { TrendingCard } from '../../../../components'

const NewsScreen = () => {
  const newsItem = []
  for (let i = 0; i < 5; i++) {
    newsItem.push(
      <TrendingCard />
    )
  }

  return (
    <ScrollView>
      {newsItem}
    </ScrollView>
  )
}

export default NewsScreen