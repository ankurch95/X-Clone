import { View, ScrollView, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../../../components/Header';
import { FabButton, TweetCard } from '../../../components';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import Video, { VideoRef } from 'react-native-video';
import { Card } from 'react-native-paper';

const DashboardScreen = () => {
  const [visibility, setVisibility] = useState(true)
  const initialMode = useRef<boolean>(true);
  const videoRef = useRef<VideoRef>(null);

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

  const onBuffer = (err: any) => {
    if (err) {
      console.log('something went wrong with the video', err)
    }
  }

  const onError = (err: any) => {
    if (err) {
      console.log('something went wrong with the video', err)
    }
  }

  return (
    <>
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

          <Card style={{ margin: 10,borderRadius:10 }}>
            <Video
              source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              ref={videoRef}
              onBuffer={onBuffer}
              onError={onError}
              resizeMode='cover'
              repeat={true}
              controls
              style={{
                overflow: 'hidden',
                // position: 'absolute',
                borderRadius: 10,
                height: 300,
                width: '100%',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            />
          </Card>
        </View>
      </ScrollView>

      <FabButton
        icon='plus'
        onPress={() => setVisibility(!visibility)} />
    </>
  )
}

export default DashboardScreen;