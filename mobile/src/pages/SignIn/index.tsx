import React, { useState } from 'react';
import {
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from 'react-native';

import { useTheme } from 'styled-components';

import LogoPng from '../../assets/BlueLogo.png';
import { Button } from '../../components/Form/Button';

import { Input } from '../../components/Form/Input';
import { PasswordInput } from '../../components/Form/PasswordInput';

import {
    Container,
    Logo,
    Title,
    SubTitle,
    Form,
    SignUp,
    SignUpText,
} from './styles';

export function SignIn() {

    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        console.log("Email", email);
        console.log("Senha", password);
    }

    return (

        <Container >
            <StatusBar backgroundColor={theme.colors.title} barStyle='dark-content' />
            <Logo source={LogoPng} />

            <Title>
                Faça seu login ou{'\n'}
                cadastre-se
            </Title>

            <SubTitle>
                Faça seu login para começar{'\n'}
                uma experiência incrível.
            </SubTitle>

            <Form>
                <Input
                    iconName='mail'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />

                <PasswordInput
                    iconName='lock'
                    placeholder='Senha'
                    onChangeText={setPassword}
                    value={password}
                />

            </Form>

            <Button
                title='Login'
                bgColor={theme.colors.blue}
                textColor={theme.colors.white}
                onPress={handleSignIn}
            />

            <SignUp>
                <TouchableOpacity>
                    <SignUpText>Criar conta gratuita</SignUpText>
                </TouchableOpacity>
            </SignUp>

        </Container>

    );
}