import React from "react";
import stylesGuide from "../../../stylesGuide";
import Icon from "react-native-vector-icons/Feather";

import {
    BackTabArea,
    TabArea,
    TabItem,
    ItemText,
} from './styled';

export default () => {
    return (
        <BackTabArea>
            <TabArea>
                <TabItem>
                    <Icon
                        name="home"
                        size={30}
                        color={stylesGuide.colors.secondy}
                    />
                    <ItemText>Home</ItemText>
                </TabItem>
                <TabItem>
                    <Icon
                        name="credit-card"
                        size={30}
                        color={stylesGuide.colors.secondy}
                    />
                    <ItemText>Markets</ItemText>
                </TabItem>
                <TabItem>
                    <Icon
                        name="credit-card"
                        size={30}
                        color={stylesGuide.colors.secondy}
                    />
                    <ItemText>Markets</ItemText>
                </TabItem>
                <TabItem>
                    <Icon
                        name="credit-card"
                        size={30}
                        color={stylesGuide.colors.secondy}
                    />
                    <ItemText>Markets</ItemText>
                </TabItem>
                <TabItem>
                    <Icon
                        name="credit-card"
                        size={30}
                        color={stylesGuide.colors.secondy}
                    />
                    <ItemText>Markets</ItemText>
                </TabItem>
            </TabArea>
        </BackTabArea>
    )
}