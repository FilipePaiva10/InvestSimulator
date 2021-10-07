import styled from "styled-components/native";
import stylesGuide from "../../../stylesGuide";


export const BackTabArea = styled.View`
    background-color: ${stylesGuide.bg.Primary};
    
`

export const TabArea = styled.View`
    background-color: ${stylesGuide.bg.Secondy};
    border-radius: 20px;
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
    color: ${stylesGuide.colors.secondy};
`;

export const ItemImg = styled.Image`
    widht: 25px;
    height: 25px;
`;