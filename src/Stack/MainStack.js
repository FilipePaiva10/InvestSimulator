import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../pages/Preload";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MainTabStack from "./MainTabStack";

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="MainTab"
        >
            <MainStack.Screen name="Preload" component={Preload} />
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="MainTab" component={MainTabStack} />
        </MainStack.Navigator>
    )
}