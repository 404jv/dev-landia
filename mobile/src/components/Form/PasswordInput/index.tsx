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

export function PasswordInput({ iconName, value, ...rest }: InputProps) {

    const theme = useTheme();
    const [revealPassword, setRevealPassword] = useState(true);

    function handleRevealPassword() {
        setRevealPassword(!revealPassword);
    }

    const [isFocused, setIsfocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsfocused(true);
    }

    function handleInputBlur() {
        setIsfocused(false);
        setIsFilled(!!value);
    }



    return (
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={26}
                    color={(isFocused || isFilled) ? theme.colors.blue : theme.colors.text_detail}
                />
            </IconContainer>

            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={revealPassword}
                isFocused={isFocused}
                {...rest}
            />

            <IconContainer isFocused={isFocused}>
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