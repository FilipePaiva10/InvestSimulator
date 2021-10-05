import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../component/CustomTabBar';

import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false
            }}
            tabBar={props => <CustomTabBar {...props}></CustomTabBar>}
        >
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    )
}

