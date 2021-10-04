import React from "react";
import {
    CryptoArea,
    InfoArea,
    ImgArea,
    StatisticsArea,
    ImgInfo,
    InfoLabelArea,
    Title,
    Cod,
    Price,
    Percent
} from './styled';


export default () => {
    return (
        <CryptoArea>
            <InfoArea>
                <ImgInfo source={require("../../assets/img/Bitcoin.png")} />
                <InfoLabelArea>
                    <Title>Bitcoin</Title>
                    <Cod>BTC</Cod>
                </InfoLabelArea>
            </InfoArea>
            <ImgArea source={require("../../assets/img/Uptrend.png")} />
            <StatisticsArea>
                <Price>32,697.05</Price>
                <Percent>+0,81%</Percent>
            </StatisticsArea>
        </CryptoArea>
    )
}