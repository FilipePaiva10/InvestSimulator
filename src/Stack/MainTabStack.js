import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../pages/Home';

const Tab = createMaterialBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator 
            tabBar={props=> <CustomTabBar {...props}></CustomTabBar>}
            initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    )
}

