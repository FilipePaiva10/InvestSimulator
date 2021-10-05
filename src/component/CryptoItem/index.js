import { PROPERTY_TYPES } from "@babel/types";
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


export default (props) => {
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
                <Percent
                    up={props.up}
                >
                    +0,81%</Percent>
            </StatisticsArea>
        </CryptoArea>
    )
}