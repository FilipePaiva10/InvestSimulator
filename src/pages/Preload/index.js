import React, { useEffect } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";

import {
    PreloadArea,
    PreloadBgImage,
    PreloadTitle
} from './styled'

export default () => {

    const navigation = useNavigation();

    useEffect(() => {

        const getToken = async () => {
            try {
            
                const token = await AsyncStorage.getItem("token");
                if (token !== null) {
                    setTimeout(() => {
    
                        
    
                    }, 1500)
                } else {
                    navigation.navigate("Login");
                }
    
            } catch (e) {
    
            }
        }

        getToken();
       

    }, []);

    return (
        <PreloadArea>
            <PreloadTitle>InvestSimulator</PreloadTitle>
            <PreloadBgImage source={require("../../assets/img/Constelation.png")} />
        </PreloadArea>
    )
}