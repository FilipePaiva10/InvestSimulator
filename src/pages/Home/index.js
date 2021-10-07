import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useLayoutEffect } from "react";

import Icon from "react-native-vector-icons/Feather";

import { ScrollView, Text } from "react-native";
import {
    HomeArea,
    HomeSwitchArea,
    HomeButtonArea,
    HomeButtonText,
    HomeHeaderArea,
    HeaderImg,
    HeaderActions,
    HomeContentArea,
    HomeResumeArea,
    AddItem, 
    HeaderUserImg
} from './styled';

import CryptoItem from "../../component/CryptoItem";
import ThemeSwitcher from "../../component/ThemeSwitcher";

import useApi from '../../api';

export default () => {

    const api = useApi();

    const navigation = useNavigation();

    const [theme, setTheme] = useState("Dark");
    
    const [resumeCryptos, setResumeCryptos] = useState([]);

    useEffect(() => {

        setResumeCryptos(api.getResumeCrypto());

    }, []);

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
                <HeaderUserImg>
                    < Icon
                        name="user"
                        size={30}
                        color="#777"
                    />
                </HeaderUserImg>
                <HeaderActions>
                    <ThemeSwitcher />
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
                        {resumeCryptos.length > 0 &&
                            resumeCryptos.map((item, key) => (
                                <CryptoItem key={key} data={item} />
                            ))
                        }

                        <AddItem><Text style={{ color: '#FFF', fontSize: 18 }}>Add To Favorite</Text></AddItem>
                    </HomeResumeArea>
                </ScrollView>
            </HomeContentArea>
        </HomeArea>
    )
}