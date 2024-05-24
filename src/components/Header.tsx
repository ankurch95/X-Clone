import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

type Props = {
    title: string
    placeholderText: string
    showSearchBar?: boolean
    onChangeText?: (text: string) => void
}
export const Header = ({
    title = '',
    placeholderText = 'Search',
    showSearchBar = false,
    onChangeText
}: Props) => {
    return (
        <View style={style.container}>
            {
                showSearchBar&&
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
        paddingHorizontal:10
    },
    textInputStyle:{
        flex: 1,
        backgroundColor: colors.ISABELLINE,
        paddingHorizontal: 10,
        height: 40,
        borderRadius:10
    }
})
