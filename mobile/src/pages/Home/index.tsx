import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Phase } from './Phase';

import goldCoin from '../../assets/gold.png';
import xpCoin from '../../assets/xp.png';
import medalCoin from '../../assets/medal.png';

import { useRef } from 'react';


import {
    Container,
    Header,
    Content,
    CoinView,
    Image,
    CoinValue,
    Phases,
    PhasePosition,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {

    const theme = useTheme();
    const navigation = useNavigation();


    const scrollRef = useRef<any>();

    function handleScrollToBottom() {
        scrollRef.current?.scrollTo({
            y: 9999,
            animated: true,
        });
    }


    const phases = [
        {
            id: 1,
            iconName: 'box',
            name: 'Testes',
            level: 0,
        },
        {
            id: 2,
            iconName: 'monitor',
            name: 'Algoritmo',
            level: 5,
        },
        {
            id: 3,
            iconName: 'zap',
            name: 'Comandos',
            level: 2,
        },
        {
            id: 4,
            iconName: 'play-circle',
            name: 'Introdução',
            level: 5,
        },
        {
            id: 5,
            iconName: 'monitor',
            name: 'Algoritmo',
            level: 5,
        },
        {
            id: 6,
            iconName: 'zap',
            name: 'Comandos',
            level: 5,
        },
        {
            id: 7,
            iconName: 'play-circle',
            name: 'Introdução',
            level: 5,
        },
        {
            id: 8,
            iconName: 'monitor',
            name: 'Algoritmo',
            level: 5,
        },

    ]


    let cont = 0;

    function handlePosition() {
        if (cont >= 4) {
            cont = 0;
        }

        cont = cont + 1;
        return cont;
    }

    function handleAchiviments() {
        navigation.navigate('Achievements')
    }


    useEffect(() => {
        handleScrollToBottom();
    }, []);

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.primary} />

            <Header>
                <Content>
                    <CoinView>
                        <Image source={goldCoin} />
                        <CoinValue>23</CoinValue>
                    </CoinView>

                    <CoinView>
                        <Image source={xpCoin} />
                        <CoinValue>232</CoinValue>
                    </CoinView>

                    <CoinView>
                        <TouchableOpacity onPress={handleAchiviments} style={{ flexDirection: 'row' }}>
                            <Image source={medalCoin} />
                            <CoinValue>17</CoinValue>
                        </TouchableOpacity>
                    </CoinView>

                </Content>
            </Header>

            <ScrollView ref={scrollRef}>
                <Phases>
                    {phases.map(phase => {
                        return (
                            <PhasePosition key={phase.id} keyPosition={handlePosition()}>
                                <Phase IconName={phase.iconName} level={phase.level} LvName={phase.name} />
                            </PhasePosition>
                        )
                    })}
                </Phases>
            </ScrollView>

        </Container>
    );
}