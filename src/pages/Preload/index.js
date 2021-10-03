import React, { useEffect } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";

import {
    PreloadArea,
    PreloadBgImage,
    PreloadTitle
} from './styled'
import { ActivityIndicator } from "react-native";
import stylesGuide from "../../../stylesGuide";

export default () => {

    const navigation = useNavigation();

    useEffect(() => {

        const getToken = async () => {
            try {
            
                const token = await AsyncStorage.getItem("token");
                if (token !== null) {
                    setTimeout(() => {
    
                        
    
                    }, 2500)
                } else {
                    setTimeout(() => {
    
                        navigation.navigate("Login");
                        
                    }, 1500)
                }
    
            } catch (e) {
    
            }
        }

        getToken();
       

    }, []);

    return (
        <PreloadArea>
            <PreloadTitle>InvestSimulator</PreloadTitle>
            <ActivityIndicator color={stylesGuide.colors.white} size="large" />
            <PreloadBgImage source={require("../../assets/img/Constelation.png")} />
        </PreloadArea>
    )
}