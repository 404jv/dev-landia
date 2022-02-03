import { Feather } from '@expo/vector-icons';
import React from 'react';

import {
    Container,
    Icon,
    CoinInfo,
    CoinQTD,
    CoinDescription,
} from './styles';

interface Props{
    coins: string,
    description: string,
    name: string,
    color: string,
}

export function PerfilCoins({ coins, description, name, color }: Props){


    return(
        <Container>
            <Icon name={name} color={color} size={25}/>

            <CoinInfo>
                <CoinQTD>{coins}</CoinQTD>
                <CoinDescription>{description}</CoinDescription>
            </CoinInfo>
        </Container>
    )
}