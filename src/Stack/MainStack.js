import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../pages/Preload";
import Login from "../pages/Login";
import Home from "../pages/Home";

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <MainStack.Screen name="Preload" component={Preload} />
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    )
}