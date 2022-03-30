import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
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

    return (
        <Container>
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
                />

                <PasswordInput
                    iconName='lock'
                    placeholder='Senha'
                />
            </Form>

            <Button
                title='Login'
                bgColor={theme.colors.blue}
                textColor={theme.colors.white}
            />

            <SignUp>
                <TouchableOpacity>
                    <SignUpText>Criar conta gratuita</SignUpText>
                </TouchableOpacity>
            </SignUp>

        </Container>
    );
}