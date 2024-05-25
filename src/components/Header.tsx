import { View, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { FONTS, FONTS_SIZE } from '../theme/fonts'
import { useNavigation } from '@react-navigation/native'

type Props = {
    title?: string
    placeholderText: string
    showSearchBar?: boolean
    onChangeText?: (text: string) => void
}
export const Header = ({
    title = '',
    placeholderText = 'Search',
    showSearchBar = false,
    onChangeText,
}: Props) => {
    const navigation = useNavigation()
    return (
        <View style={style.container}>

            <Pressable onPress={() => navigation.openDrawer()}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' }}
                    style={style.profileImage}
                    resizeMode='cover'
                />
            </Pressable>
            <Text style={style.title}>{title}</Text>
            {
                showSearchBar &&
                <TextInput
                    style={style.textInputStyle}
                    placeholder={placeholderText}
                    onChangeText={onChangeText} />
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        backgroundColor: colors.WHITE_COLOR,
        paddingRight: 10,
        paddingLeft: 20
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        marginRight: 15
    },
    title: {
        fontSize: FONTS_SIZE.lg,
        fontFamily: FONTS.FontsBold,
    },
    textInputStyle: {
        flex: 1,
        backgroundColor: colors.ISABELLINE,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10
    }
})
