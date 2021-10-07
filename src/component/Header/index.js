import React from "react";


import {
    HeaderArea,
    HeaderImg,
    HeaderActions,
    ActionText,
    AddItem,
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
                <AddItem><Text>Add To Favorite</Text></AddItem>
            </HeaderActions>
        </HeaderArea>
    )
}