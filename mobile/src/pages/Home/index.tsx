import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Step } from '../../components/Step';


import { 
    Container,
    Header,
    Coin,
    CoinText,
    LevelContainerI,
    LevelContainerII,
    FirstStep,
    SecondStep,
} from './styles';


export function Home({ navigation }) {


    return (
        <Container>
            <Header>
                <Coin> 
                    <Feather name="slack" size={26} color="#45A7AD"/>
                    <CoinText>232</CoinText>
                </Coin>

                <Coin> 
                    <Feather name="codesandbox" size={26} color="#844799"/>
                    <CoinText>12</CoinText>
                </Coin>

                <Coin> 
                    <Feather name="moon" size={26} color="#702230"/>
                    <CoinText>23</CoinText>
                </Coin>

            </Header>

            


            <LevelContainerI>
                <Step IconName="box" level={0}/>
            </LevelContainerI>

            <LevelContainerII>
                <FirstStep>
                    <Step  IconName="monitor" level={5} LvName="Algoritmo"/>
                </FirstStep>

                <SecondStep>
                    <Step IconName="zap" level={2} LvName="Comandos"/>
                </SecondStep>
            </LevelContainerII>

            <LevelContainerI>
                <Step IconName="play-circle" level={5} LvName="Introdução" onPress={() => navigation.navigate('Activity')}/>
            </LevelContainerI>


        </Container>
    )
}
