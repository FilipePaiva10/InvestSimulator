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
            <HeaderUserImg></HeaderUserImg>
            <HeaderActions>
                <ActionItem>
                    <ActionImg source={require("../../assets/img/search.png")} />
                </ActionItem>
                <AddItem><Text>Add To Favorite</Text></AddItem>
            </HeaderActions>
        </HeaderArea>
    )
}