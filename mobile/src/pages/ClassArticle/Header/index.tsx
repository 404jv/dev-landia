import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { Title, MenuBar } from './styles';

type Props = {
    title: string;
}

export function Header({ title }: Props) {

    const theme = useTheme();

    return (
        <MenuBar>
            <TouchableOpacity activeOpacity={0.7}>
                <MaterialIcons name="arrow-back" size={32} color={theme.colors.stroke} />
            </TouchableOpacity>

            <Title>{title}</Title>
        </MenuBar>
    );
}
