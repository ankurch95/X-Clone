import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { HomeRootTabParamList } from './homeTypes';
import { DashboardScreen, MessageScreen, SearchScreen } from '../screens/home';
import { colors } from '../theme/colors';
import SearchRoute from './searchRoute';


const Tab = createBottomTabNavigator<HomeRootTabParamList>();
const HomeRoute = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.PRIMARY_COLOR,
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            lazy: true
        }}>
            <Tab.Screen
                name='DashboardScreen'
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="home"
                            color={focused ? colors.PRIMARY_COLOR : 'gray'}
                            size={26} />
                    )
                }}
            />
            <Tab.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="search"
                            color={focused ? colors.PRIMARY_COLOR : 'gray'}
                            size={26} />
                    )
                }}
            />

            <Tab.Screen
                name='MessageScreen'
                component={MessageScreen}
                options={{
                    tabBarLabel: 'Message',
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="message-circle"
                            color={focused ? colors.PRIMARY_COLOR : 'gray'}
                            size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeRoute;