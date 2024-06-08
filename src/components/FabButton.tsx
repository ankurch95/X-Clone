import { StyleSheet } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import { colors } from '../theme/colors'

type Props = {
    icon: string
    iconColor?: string
    fabSize?: number
    onPress: () => void
}
export const FabButton = ({
    icon,
    iconColor = colors.WHITE_COLOR,
    fabSize = 60,
    onPress
}: Props) => {
    return (
        <FAB
            icon={icon}
            color={iconColor}
            customSize={fabSize}
            onPress={onPress}
            style={style.fabIcon} />
    )
}

const style = StyleSheet.create({
    fabIcon: {
        position: 'absolute',
        marginRight: 20,
        right: 0,
        bottom: 75,
        borderRadius: 100 / 2,
        backgroundColor: colors.PRIMARY_COLOR
    }
})