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
                <ImgInfo source={props.data.img} />
                <InfoLabelArea>
                    <Title>{props.data.title}</Title>
                    <Cod>{props.data.cod}</Cod>
                </InfoLabelArea>
            </InfoArea>
            {props.data.up &&
                <ImgArea source={require("../../assets/img/Uptrend.png")} />
            }
            {!props.data.up &&
                <ImgArea source={require("../../assets/img/Lowtrend.png")} />
            }
            <StatisticsArea>
                <Price>{props.data.price}</Price>
                <Percent
                    up={props.data.up}
                >
                    {props.data.up ? `+${props.data.percent}` : `-${props.data.percent}`}</Percent>
            </StatisticsArea>
        </CryptoArea>
    )
}