import React, { useState, useEffect } from "react";
import { Platform } from "react-native";

import { useNavigation } from "@react-navigation/core";

import stylesGuide from "../../../stylesGuide";
import Button from "../../component/Button";

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

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signIn, setSignIn] = useState(true);
    const [signUp, setSignUp] = useState(false);
    const [activeModal, setActiveModal] = useState(false);

    const handleSignInSwitchClick = () => {
        setSignIn(true);
        setSignUp(false);
    }


    const handleSignUpSwitchClick = () => {
        setSignIn(false);
        setSignUp(true);
    }

    const handleSignInClick = () => {
        
        setTimeout(() => {
            setActiveModal(false);
            navigation.navigate('Home');
        }, 1500);
    }

    const handleSignUpClick = () => {
        alert('Realizou Cadastro');
    }

    return (
        <LoginContainer>
            <LoginSwitchArea>
                <LoginButtonArea
                    active={signIn}
                    onPress={handleSignInSwitchClick}
                >
                    <LoginButtonText>Login</LoginButtonText>
                </LoginButtonArea>
                <LoginButtonArea
                    active={signUp}
                    onPress={handleSignUpSwitchClick}
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
                {signIn &&
                    <Button
                        handleClick={handleSignInClick}
                        label='Login'
                    />
                }
                {signUp &&
                    <Button
                        handleClick={handleSignUpClick}
                        label='Cadastrar'
                    />
                }
            </LoginActionArea>
            {/* {activeModal &&
                <ModalArea />
            } */}
        </LoginContainer>
    )
}