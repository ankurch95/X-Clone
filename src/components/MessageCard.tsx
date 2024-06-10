import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper'
import { FONTS, FONTS_SIZE } from '../theme/fonts'

export const MessageCard = () => {
    return (
        <Card style={style.cardContainer}>
            <Card.Content style={{ flexDirection: 'row', flex: 1 }}>
                <Image
                    source={{ uri: 'https://picsum.photos/500' }}
                    style={style.imageView} />
                <View style={{ flex: 1 }}>
                    <View style={ style.titleView}>
                        <Title style={style.title}>Ankur Chauhan</Title>
                        <Text style={style.timeText}>9:41</Text>
                    </View>
                    <Paragraph numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cum rerum vero quidem, nulla accusamus laudantium ratione atque porro voluptatem! Iusto qui rerum cum odit accusamus obcaecati deleniti saepe itaque!</Paragraph>
                </View>
            </Card.Content>
        </Card>
    )
}


const style = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'white',
        marginTop:10
    },
    title: {
        fontFamily: FONTS.FontsBold,
        fontSize: FONTS_SIZE.md
    },
    imageView: {
        margin: 10,
        width: 70,
        height: 70,
        borderRadius: 70 / 2
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeText: {
        marginHorizontal: 10,
        fontFamily: FONTS.FontsRegular
    }
});