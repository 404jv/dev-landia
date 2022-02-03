import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, IconHome } from './styles';

export const CustomTabBarButton = ({ name, size, color }) => (
    <Container>
        <IconHome>
            <Feather name={name} size={size} color={color}/>   
        </IconHome>
    </Container>
);