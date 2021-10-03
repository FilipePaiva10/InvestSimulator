import styled from "styled-components/native";
import stylesGuide from "../../../stylesGuide";

export const PreloadArea = styled.View`
    flex: 1;
    background-color: ${stylesGuide.bg.Primary};
    justify-content: center;
    align-items: center;
`

export const PreloadBgImage = styled.Image`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

export const PreloadTitle = styled.Text`
    color: ${stylesGuide.colors.green}
    font-size: 28px;
    font-weight: bold;
`;