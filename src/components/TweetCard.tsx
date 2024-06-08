import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Card, Paragraph } from 'react-native-paper'
import Icon from './Icon'
import { colors } from '../theme/colors'
import { FONTS, FONTS_SIZE } from '../theme/fonts'

export const TweetCard = () => {
    return (
        <Card style={style.cardContainer}>
            <Card.Title
                title="Ankur Chauhan"
                titleStyle={style.title}
                right={props => <Text style={style.timeText}>9:41</Text>}
                left={props => <Avatar.Image {...props} source={{ uri: 'https://picsum.photos/500' }} />} />
            <Card.Content>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cum rerum vero quidem, nulla accusamus laudantium ratione atque porro voluptatem! Iusto qui rerum cum odit accusamus obcaecati deleniti saepe itaque!</Paragraph>
            </Card.Content>
            <Card.Cover
                resizeMode='cover'
                source={{ uri: 'https://picsum.photos/500' }}
                style={{ margin: 10 }} />
            <View style={style.statView}>
                <Pressable style={style.statSubView}>
                    <Icon
                        iconName="message-circle"
                        iconSize={17}
                        color={colors.BLACK_COLOR} />
                    <Text style={style.statText}>10</Text>
                </Pressable>

                <Pressable style={style.statSubView}>
                    <Icon
                        iconName="repeat"
                        iconSize={17}
                        color={colors.BLACK_COLOR} />
                    <Text style={style.statText}>5</Text>
                </Pressable>

                <Pressable style={style.statSubView}>
                    <Icon
                        iconName="heart"
                        iconSize={17}
                        color={colors.BLACK_COLOR} />
                    <Text style={style.statText}>100</Text>
                </Pressable>

                <Pressable style={style.statSubView}>
                    <Icon
                        iconName="bar-chart-2"
                        iconSize={17}
                        color={colors.BLACK_COLOR} />
                    <Text style={style.statText}>1110</Text>
                </Pressable>
            </View>
        </Card>
    )
}


const style = StyleSheet.create({
    cardContainer: {
        margin: 10,
        backgroundColor: 'white'
    },
    title: {
        fontFamily: FONTS.FontsBold,
        fontSize: FONTS_SIZE.md
    },
    statView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 10
    },
    statSubView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    statText: {
        marginLeft: 5,
        fontSize: FONTS_SIZE.sm,
        fontFamily: FONTS.FontsMedium
    },
    timeText: {
        marginHorizontal: 10,
        fontFamily: FONTS.FontsRegular
    }

});