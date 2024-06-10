import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS } from '../theme/fonts'

export const TrendingCard = () => {
  return (
    <Pressable style={style.container}>
        <Text style={style.trendingText}>#TrendingText</Text>
        <Text style={style.trendingPostText}>100K posts</Text>
        <Text style={style.trendingCategoryText}>Trending Category</Text>
      </Pressable>
  )
}


const style = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      paddingVertical: 25,
      paddingHorizontal: 10,
      marginTop:5
    },
    trendingText: {
      fontSize: 20,
      color: 'black',
      fontFamily: FONTS.FontsMedium
    },
    trendingPostText: {
      fontSize: 14,
      color: 'black',
      marginTop:5,
      fontFamily: FONTS.FontsRegular
    },
    trendingCategoryText: {
      fontSize: 14,
      color: 'grey',
      marginTop:5,
      fontFamily: FONTS.FontsRegular
    },
  
  })

