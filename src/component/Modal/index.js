import React from "react";
import { ActivityIndicator } from "react-native";
import { ModalArea } from './styled';


export default () => {
    return(
        <ModalArea>
            <ActivityIndicator
                color="#000"
                size="large"
            />
        </ModalArea>
    )
}