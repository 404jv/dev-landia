import React from 'react';
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

export function Input({ iconName, ...rest }: InputProps) {

    const theme = useTheme();

    return (
        <Container>
            <IconContainer>
                <Feather name={iconName} size={26} color={theme.colors.text_detail} />
            </IconContainer>

            <InputText

                {...rest}
            />
        </Container>
    );
}