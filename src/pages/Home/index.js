import React, { useState } from "react";
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
    HomeResumeArea,
    AddItem
} from './styled';

import { HeaderArea } from "../../component/Header/styled";
import CryptoItem from "../../component/CryptoItem";
import ThemeSwitcher from "../../component/ThemeSwitcher";

let resume = [
    {title:'Bitcoin',cod:'BTC',img:'../../assets/img/Bitcoin.png',price: '280.143,78',percent: '75.32%'}
]

export default () => {

    const navigation = useNavigation();

    const [resumeCryptos, setResumeCryptos] = useState(...resume);

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
                    {/* <ActionItem>
                        <ActionImg source={require("../../assets/img/Search.png")} />
                    </ActionItem>
                    <ActionItem>
                        <ActionImg source={require("../../assets/img/Mid.png")} />
                    </ActionItem>
                    <ActionItem>
                        <ActionImg source={require("../../assets/img/Sin.png")} />
                    </ActionItem> */}
                    <ThemeSwitcher/>
                </HeaderActions>
            </HomeHeaderArea>
            <HomeContentArea>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                        {
                            resume.map((item, key)=>(
                                <CryptoItem key={key} data={item}/>
                            ))
                        }
                        
                        <AddItem><Text style={{color: '#FFF', fontSize: 18}}>Add To Favorite</Text></AddItem>
                    </HomeResumeArea>
                </ScrollView>
            </HomeContentArea>
        </HomeArea>
    )
}