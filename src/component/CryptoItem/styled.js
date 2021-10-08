import styled from "styled-components/native";
import stylesGuide from "../../../stylesGuide";


export const CryptoArea = styled.TouchableOpacity`
    flex-direction: row;
    borderBottomWidth: 1px;
    borderColor: #777;
    padding: 20px 5px;
    padding-bottom: 5px;
    justify-content: space-between;
    align-items: center;
`;


export const InfoArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


export const ImgInfo = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 18px;
`;


export const ImgArea = styled.Image`
    flex: 1;
    margin: 0 10px;
`;


export const StatisticsArea = styled.View`


`

export const InfoLabelArea = styled.View`
    margin-left: 10px;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
`
export const Cod = styled.Text`
    color: ${stylesGuide.colors.secondy}
`;

export const Price = styled.Text`
    color: ${stylesGuide.colors.secondy}
`;
export const Percent = styled.Text`
    color: ${props=> props.up ? stylesGuide.colors.green : stylesGuide.colors.red}
`;
