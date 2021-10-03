import React, { useState, useEffect } from "react";

import { Platform } from "react-native";
import stylesGuide from "../../../stylesGuide";
import {
    LoginContainer,
    LoginSwitchArea,
    LoginButtonArea,
    LoginButtonText,
    LoginTitle,
    LoginInputArea,
    LoginInput,
    InputTextArea,
    Input,
    Text,
    TextBtn,
    LoginActionArea,
    ButtonArea,
    ButtonText
} from "./styled";


export default () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signIn, setSignIn] = useState(true);
    const [signUp, setSignUp] = useState(false);

    const handleSignInClick = () => {
        setSignIn(true);
        setSignUp(false);
    }


    const handleSignUpClick = () => {
        setSignIn(false);
        setSignUp(true);
    }

    return (
        <LoginContainer behavior={Platform.OS == 'ios' ? 'padding' : null}>
            <LoginSwitchArea>
                <LoginButtonArea
                    active={signIn}
                    onPress={handleSignInClick}
                >
                    <LoginButtonText>Login</LoginButtonText>
                </LoginButtonArea>
                <LoginButtonArea
                    active={signUp}
                    onPress={handleSignUpClick}
                >
                    <LoginButtonText>Cadastrar</LoginButtonText>
                </LoginButtonArea>
            </LoginSwitchArea>
            <LoginTitle>{signIn ? 'Login' : 'Cadastrar'}</LoginTitle>
            <LoginInputArea>
                {signUp &&
                    <LoginInput>
                        <InputTextArea>
                            <Text>Nome</Text>
                        </InputTextArea>
                        <Input
                            value={name}
                            onChangeText={txt => setName(txt)}
                            placeholder="Entre com o nome"
                            placeholderTextColor={stylesGuide.colors.primary}
                        />
                    </LoginInput>
                }
                <LoginInput>
                    <InputTextArea>
                        <Text>Email</Text>
                        {signIn &&
                            <TextBtn
                                onPress={() => { }}
                            >
                                <Text
                                    color={stylesGuide.colors.green}
                                >Entrar com o telefone</Text>
                            </TextBtn>
                        }
                    </InputTextArea>
                    <Input
                        value={email}
                        onChangeText={txt => setEmail(txt)}
                        placeholder="Entre com o email"
                        placeholderTextColor={stylesGuide.colors.primary}
                    />
                </LoginInput>
                <LoginInput>
                    <InputTextArea>
                        <Text>Senha</Text>
                        {signIn &&
                            <TextBtn
                                onPress={() => { }}
                            >
                                <Text
                                    color={stylesGuide.colors.green}
                                >Esqueci a senha</Text>
                            </TextBtn>
                        }
                    </InputTextArea>
                    <Input
                        value={password}
                        onChangeText={txt => setPassword(txt)}
                        placeholder="Entre com a senha"
                        placeholderTextColor={stylesGuide.colors.primary}
                        secureTextEntry={true}
                    />
                </LoginInput>
            </LoginInputArea>
            <LoginActionArea>
                <ButtonArea>
                    <ButtonText>{signIn ? 'Login' : 'Cadastrar'}</ButtonText>
                </ButtonArea>
            </LoginActionArea>
        </LoginContainer>
    )
}