import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import { TouchableOpacity } from 'react-native';

import {
    Container,
    InputText,
    IconContainer,
} from './styles';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function PasswordInput({ iconName, ...rest }: InputProps) {

    const theme = useTheme();
    const [revealPassword, setRevealPassword] = useState(true);

    function handleRevealPassword() {
        setRevealPassword(!revealPassword);
    }



    return (
        <Container>
            <IconContainer>
                <Feather name={iconName} size={26} color={theme.colors.text_detail} />
            </IconContainer>

            <InputText
                secureTextEntry={revealPassword}
                {...rest}
            />

            <IconContainer>
                <TouchableOpacity onPress={handleRevealPassword}>
                    <Feather
                        name={revealPassword ? 'eye' : 'eye-off'}
                        size={26}
                        color={theme.colors.text_detail}
                    />
                </TouchableOpacity>
            </IconContainer>
        </Container>
    );
}