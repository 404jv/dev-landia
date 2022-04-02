import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Title,
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgColor?: string;
    textColor?: string;
}

export function Button({ title, bgColor = 'white', textColor = 'black', ...rest }: ButtonProps) {
    return (
        <Container bgColor={bgColor} {...rest}>
            <Title textColor={textColor}>
                {title}
            </Title>
        </Container>
    );
}