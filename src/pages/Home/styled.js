import styled from "styled-components/native";
import stylesGuide from "../../../stylesGuide";


export const HomeArea = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const HomeHeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    
`;


export const HeaderUserImg = styled.TouchableOpacity`
    width: 36px;
    height: 36px;
    border-radius: 25px;
    background-color: #DDD
    justify-content: center;
    align-items: center;
`;


export const HeaderActions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const ActionItem = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const ActionText = styled.Text`


`;


export const ActionImg = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 12px;
`;

export const HomeContentArea = styled.View`
    flex: 1;
    padding: 0 20px;
`;

export const HomeSwitchArea = styled.View`
    width: 100%;
    background-color: ${stylesGuide.bg.Secondy};
    border-radius: 10px;
    flex-direction: row;
    padding: 10px;
    margin-top: 20px;
`;

export const HomeButtonArea = styled.TouchableOpacity`
    height: 40px;
    padding: 10px;
    background-color: ${props=> props.active ? stylesGuide.bg.Primary : stylesGuide.bg.Secondy};
    border-radius: 10px;
    margin-right: 10px;
`;

export const HomeButtonText = styled.Text`
    color: ${stylesGuide.colors.primary};
    font-size: 14px;
    text-align: center;
`;

export const HomeResumeArea = styled.View`

`;


export const AddItem = styled.TouchableOpacity`
    margin-top: 10px;
    border: 1px dashed #777;
    align-items: center;
    justify-content: center;
    height: 60px;
    widht: 100%;
    border-radius: 5px;
`;