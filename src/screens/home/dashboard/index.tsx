import { View, ScrollView, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../../../components/Header';
import { FabButton, TweetCard } from '../../../components';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

const DashboardScreen = () => {
  const [visibility, setVisibility] = useState(true)
  const initialMode = useRef<boolean>(true);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <Animated.View
        key={i}
        entering={initialMode.current ? FadeIn.delay(0) : FadeIn}
        exiting={FadeOut}
        layout={Layout.delay(100)}>
        <TweetCard key={i} />
      </Animated.View>
    );
  }

  return (
    <View>
      <Header
        title={''}
        placeholderText={''}
      />
      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          {visibility &&
            <View style={{ margin: 10, backgroundColor: 'white', height: 100 }}>
              <Text>Add Tweet</Text>
            </View>
          }
          {items}
        </View>
      </ScrollView>

      <FabButton
        icon='plus'
        onPress={() => setVisibility(!visibility)} />
    </View>
  )
}

export default DashboardScreen;