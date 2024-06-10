import { ScrollView } from 'react-native'
import React from 'react'
import { TrendingCard } from '../../../../components';

const ForYouScreen = () => {
  const trendingItem = [];
  for (let i = 0; i < 10; i++) {
    trendingItem.push(
      <TrendingCard key={i} />
    );
  }

  return (
    <ScrollView>
      {trendingItem}
    </ScrollView>
  )
}

export default ForYouScreen;
