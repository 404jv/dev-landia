import React from 'react';
import { Feather } from '@expo/vector-icons';
import Svg, { G, Circle } from 'react-native-svg';


import { Container, Icon, Level, LevelText, LevelName, } from './styles';
import { useTheme } from 'styled-components';


interface Props {
    level: number;
    IconName: any;   //Any para corrigir problemas <==
    LvName?: string;
    onPress?: () => any; //Any para corrigir problemas <==
}


export function Phase({ IconName, level, LvName, ...rest }: Props) {

    const size = 90;
    const strokeWitdh = 6;
    const center = size / 2;
    const radius = size / 2 - strokeWitdh / 2;
    const circumference = 2 * Math.PI * radius;

    const Lv = level * 20;

    const theme = useTheme();

    return (
        <Container  {...rest} style={{ flexWrap: 'wrap' }}>
            <Svg width={size} height={size}>
                <G rotation="53" origin={center}>
                    <Circle stroke={theme.colors.stroke} cx={center} cy={center} r={radius} strokeWidth={strokeWitdh} />
                    <Circle
                        stroke={theme.colors.blue}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWitdh}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (circumference * Lv) / 100}
                    />
                </G>
            </Svg>


            <Icon>
                <Feather name={IconName} size={40} color="#fff" />

                <Level>
                    <LevelText>{level != 0 ? level : <Feather name="lock" color="#fff" size={13} />}</LevelText>
                </Level>
            </Icon>
            <LevelName>{level != 0 ? LvName : ''}</LevelName>
        </Container>
    )
}