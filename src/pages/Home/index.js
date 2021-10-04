import React from "react";
import { useNavigation } from "@react-navigation/core";

import { useLayoutEffect } from "react";

import { Image, ScrollView, Text } from "react-native";
import {
    HomeArea,
    HomeSwitchArea,
    HomeButtonArea,
    HomeButtonText,
    HomeHeaderArea,
    HeaderImg,
    HeaderActions,
    ActionItem,
    ActionImg,
    HomeContentArea,
    HomeResumeArea
} from './styled';

import { HeaderArea } from "../../component/Header/styled";
import  CryptoItem  from "../../component/CryptoItem";

export default () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({
            title: 'home',
            headerLeft: () => (
                <Text>OK</Text>
            )
        })

    }, []);

    return (
        <HomeArea>
            <HomeHeaderArea>
                <HeaderImg source={require("../../assets/img/user.png")} />
                <HeaderActions>
                    <ActionItem>
                        <ActionImg source={require("../../assets/img/Search.png")} />
                    </ActionItem>
                    <ActionItem>
                        <ActionImg source={require("../../assets/img/Mid.png")} />
                    </ActionItem>
                    <ActionItem>
                        <ActionImg source={require("../../assets/img/Sin.png")} />
                    </ActionItem>
                </HeaderActions>
            </HomeHeaderArea>
            <HomeContentArea>
                <HomeSwitchArea>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <HomeButtonArea

                        >
                            <HomeButtonText>Convert</HomeButtonText>
                        </HomeButtonArea>
                        <HomeButtonArea
                            active={true}

                        >
                            <HomeButtonText>Spot</HomeButtonText>
                        </HomeButtonArea>
                        <HomeButtonArea


                        >
                            <HomeButtonText>Margin</HomeButtonText>
                        </HomeButtonArea>
                        <HomeButtonArea


                        >
                            <HomeButtonText>Fiat</HomeButtonText>
                        </HomeButtonArea>
                    </ScrollView>
                </HomeSwitchArea>
                <HomeResumeArea>
                    <CryptoItem
                    />
                </HomeResumeArea>
            </HomeContentArea>
        </HomeArea>
    )
}