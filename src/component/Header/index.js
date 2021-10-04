import React from "react";


import {
    HeaderArea,
    HeaderImg,
    HeaderActions,
    ActionText
} from './styled';

export default () => {
    return (
        <HeaderArea>
            <HeaderImg source={require("../../assets/img/user.png")} />
            <ActionText>sdsdssd</ActionText>
            <HeaderActions>
                <ActionItem>
                    <ActionImg source={require("../../assets/img/search.png")} />
                </ActionItem>
            </HeaderActions>
        </HeaderArea>
    )
}