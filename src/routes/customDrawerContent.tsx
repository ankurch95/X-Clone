import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { FONTS, FONTS_SIZE } from '../theme/fonts'
import { colors } from '../theme/colors'
import Icon from '../components/Icon'

const customDrawerContent = ({ ...props }) => {
    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle={{ marginTop: -63 }}
        >

            <DrawerItem
                label="Profile"
                onPress={() => props.navigation.navigate('DashboardScreen')}
                labelStyle={styles.labelStyle}
                icon={() =>
                    <Icon
                        iconName="user"
                        iconSize={24}
                        color={colors.BLACK_COLOR} />
                }
            />

            <DrawerItem
                label="Reel"
                onPress={() => props.navigation.navigate('DashboardScreen')}
                labelStyle={styles.labelStyle}
                icon={() =>
                    <Icon
                        iconName="video"
                        iconSize={24}
                        color={colors.BLACK_COLOR} />
                }
            />

            <DrawerItem
                label="Bookmarks"
                onPress={() => props.navigation.navigate('DashboardScreen')}
                labelStyle={styles.labelStyle}
                icon={() =>
                    <Icon
                        iconName="bookmark"
                        iconSize={24}
                        color={colors.BLACK_COLOR} />
                }
            />

            <DrawerItem
                label="Settings"
                onPress={() => props.navigation.navigate('DashboardScreen')}
                labelStyle={styles.labelStyle}
                icon={() =>
                    <Icon
                        iconName="settings"
                        iconSize={24}
                        color={colors.BLACK_COLOR} />
                }
            />

        </DrawerContentScrollView>
    )
}

export default customDrawerContent;

const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: FONTS.FontsBold,
        fontSize: FONTS_SIZE.PARAGRAPH_P2,
        color: colors.BLACK_COLOR
    }
})