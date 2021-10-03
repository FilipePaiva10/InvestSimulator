import styled from "styled-components/native";
import stylesGuide from "../../../stylesGuide";


export const LoginContainer = styled.ScrollView`
    flex: 1;
    background-color: ${stylesGuide.bg.Primary}
    padding: 0 20px;
`

export const LoginSwitchArea = styled.View`
    width: 100%;
    background-color: ${stylesGuide.bg.Secondy};
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    padding: 10px;
`;

export const LoginButtonArea = styled.TouchableOpacity`
    flex: 1;
    height: 40px;
    padding: 10px;
    background-color: ${props=> props.active ? stylesGuide.bg.Primary : stylesGuide.bg.Secondy};
    border-radius: 10px;
`;

export const LoginButtonText = styled.Text`
    color: ${stylesGuide.colors.primary};
    font-size: 14px;
    text-align: center;
`;


export const LoginTitle = styled.Text`
    color: ${stylesGuide.colors.white};
    font-size: 32px;
    font-weight: bold;
    margin: 30px 0;
`

export const Text = styled.Text`
    color: ${props=> props.color ? props.color : stylesGuide.colors.primary}
`;

export const LoginInputArea = styled.View`
    flex: 1;
`;

export const LoginInput = styled.View`
    margin-top: 20px;    
`;

export const TextBtn = styled.TouchableOpacity`

`;

export const InputTextArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Input = styled.TextInput`
    background-color: ${stylesGuide.bg.Secondy};
    border-radius: 12px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    margin-top: 10px;
    height: 54px;
    padding: 0px 10px;
    border: 1px solid;
    border-color: #000;
    font-size: 16px;
`;
