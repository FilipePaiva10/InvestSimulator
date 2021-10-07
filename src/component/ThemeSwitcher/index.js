import React, { useState } from "react";

import Icon from "react-native-vector-icons/Feather";
import stylesGuide from "../../../stylesGuide";

import { SwitchArea, SwitchButton } from './styled';

export default () => {

    const [theme, setTheme] = useState("Dark");

    const handleThemeSet = () => {
        setTheme(theme == "Dark" ? 'Light' : 'Dark')
    }

    return (
        <SwitchArea>
            <SwitchButton onPress={handleThemeSet}>
                {theme == "Dark" &&
                    <Icon
                        name="moon"
                        size={30}
                        color={`${'#777777'}`}
                    />
                }
                {theme == "Light" &&
                    <Icon
                        name="sun"
                        size={30}
                        color={`${'#777777'}`}
                    />
                }
            </SwitchButton>
        </SwitchArea>
    )
}