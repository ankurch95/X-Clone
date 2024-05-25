import { Pressable } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'


type Props = {
    iconName?: string
    iconSize: number
    color?: string
    onPress?: (text: string) => void
}

const Icon = ({
    iconName,
    iconSize,
    color,
    onPress 
}: Props) => {
    return (
        <Pressable onPress={onPress}>
            <Feather
                name={iconName}
                color={color}
                size={iconSize} />
        </Pressable>
    )
}

export default Icon;