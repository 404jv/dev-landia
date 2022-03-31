import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import {
    Container,
    InputText,
    IconContainer,
} from './styles';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function Input({ iconName, value, ...rest }: InputProps) {

    const theme = useTheme();

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
                isFocused={isFocused}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
}