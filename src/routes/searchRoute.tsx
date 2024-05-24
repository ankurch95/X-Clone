import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DashboardScreen, ForYouScreen, MessageScreen, NewsScreen, SearchScreen, TrendingScreen } from '../screens/home';
import { colors } from '../theme/colors';
import { SearchRootTopTabParamList } from './searchTypes';


const TopTab = createMaterialTopTabNavigator<SearchRootTopTabParamList>();
const SearchRoute = () => {
    return (
        <TopTab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.BLACK_COLOR,
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: {
                backgroundColor: colors.BLACK_COLOR,
            },
            lazy: true,
        }}>
            <TopTab.Screen
                name='ForYouScreen'
                component={ForYouScreen}
                options={{
                    tabBarLabel: 'For You',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        textTransform:'capitalize'
                    },
                   
                }}
            />
         
         <TopTab.Screen
                name='TrendingScreen'
                component={TrendingScreen}
                options={{
                    tabBarLabel: 'Trending',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        textTransform:'capitalize'
                    },
                   
                }}
            />

            <TopTab.Screen
                name='NewsScreen'
                component={NewsScreen}
                options={{
                    tabBarLabel: 'News',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        textTransform:'capitalize'
                    },
                
                }}
            />
        </TopTab.Navigator>
    )
}

export default SearchRoute;