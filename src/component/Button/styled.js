import styled from "styled-components/native";

import stylesGuide from "../../../stylesGuide";

export const ButtonArea = styled.TouchableOpacity`
    background-color: ${stylesGuide.btn.bg.green};
    padding: 15px;
    border-radius: 16px;
`;

export const ButtonText = styled.Text`
    color: ${stylesGuide.btn.color.greenColor};
    font-size: 18px;
    text-align: center;
`;

    