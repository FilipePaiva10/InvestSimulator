import styled from "styled-components/native";
import stylesGuide from "../../../stylesGuide";

export const SwitchArea = styled.View`
    widht: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;


export const SwitchButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${props => props.theme.bgColor.primary};
    ustify-content: center;
    box-shadow: 5px 5px 5px black;
    justify-contnet: center;
    align-items: center;

`;
