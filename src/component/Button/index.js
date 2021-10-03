import React from "react";
import {
    ButtonArea,
    ButtonText
} from './styled'

export default (props) => {
    return (
        <ButtonArea 
            onPress={props.handleClick}
        >
            <ButtonText>{props.label}</ButtonText>
        </ButtonArea>
    )
}