import React from "react";

import Icon from "react-native-vector-icons/Feather";
import stylesGuide from "../../../stylesGuide";

import { SwitchArea, SwitchButton } from './styled';

export default () => {
    return (
        <SwitchArea>
            <SwitchButton>
                <Icon
                    name="moon"
                    size={30}
                    color={`${'#777777'}`}
                />
            </SwitchButton>
        </SwitchArea>
    )
}