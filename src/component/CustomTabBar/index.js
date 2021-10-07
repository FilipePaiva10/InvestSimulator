import React from "react";
import stylesGuide from "../../../stylesGuide";
import Icon from "react-native-vector-icons/Feather";

import {
    BackTabArea,
    TabArea,
    TabItem,
    ItemText,
    ItemImg
} from './styled';

export default () => {
    return (
        <BackTabArea>
            <TabArea>
                <TabItem>
                    <ItemImg source={require("../../assets/img/buttons/HomeActive.png")} />
                    <ItemText style={{color: '#FFF'}}>Home</ItemText>
                </TabItem>
                <TabItem>
                    <ItemImg source={require("../../assets/img/buttons/MarketDefault.png")} />
                    <ItemText>Markets</ItemText>
                </TabItem>
                <TabItem>
                    <ItemImg source={require("../../assets/img/buttons/TradesDefault.png")} />
                    <ItemText>Trades</ItemText>
                </TabItem>
                <TabItem>
                    <ItemImg source={require("../../assets/img/buttons/ActivityDefault.png")} />
                    <ItemText>Activity</ItemText>
                </TabItem>
                <TabItem>
                    <ItemImg source={require("../../assets/img/buttons/WalletDefault.png")} />
                    <ItemText>Wallets</ItemText>
                </TabItem>
            </TabArea>
        </BackTabArea>
    )
}