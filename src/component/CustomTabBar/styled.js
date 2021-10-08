import styled from "styled-components/native";
import stylesGuide from "../../../stylesGuide";


export const BackTabArea = styled.View`
    background-color: ${props => props.theme.bgColor.primary};
    
`

export const TabArea = styled.View`
    background-color:  ${props => props.theme.bgColor.secundary};
    border-radius: 10px;
    margin: 10px;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    padding: 20px 5px;
`;


export const TabItem = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ItemText = styled.Text`
    color: ${props => props.active ? props.theme.colors.active : props.theme.colors.primary};
`;

export const ItemImg = styled.Image`
    width: 35px;
    height: 20px;
`;