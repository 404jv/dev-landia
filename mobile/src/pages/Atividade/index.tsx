import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, View, ScrollView } from 'react-native';


import {
    Description,
    Title,
    SectionStyles,
    Container,
    Progresso,
    TextMenor,
    Bash,
    DrawBlueBox,
    DrawRedBox,
    NewLine,
} from './styles';

import theme from '../../Global/styles/theme';


export function Atividade(){


    const activity = {
        id: String(new Date().getTime()),
        title: 'atividade',
        description: 'Nesse desafio você vai desenhar a bandeira da França com alguns comandos.',
        type: 'block',
        default_code: '',
        answer: 'DrawBlueBox',
        is_needed_tests: false,
        created_at: new Date(),
        tips: [
            "Use o drawBlueBox para desenhar a caixa azul.",
            "Use o drawRedBox para desenhar a caixa vermelha.",
            "Use o drawWhiteBox para desenhar a caixa branca.",
            "Use o newLine para criar uma nova linha",
        ], 
    }


    return(
        <ScrollView>
        <Container>
            <Progresso>
                        <MaterialIcons name="close" size={50} color="#2F3437" style={styles.Icon}/>   
            </Progresso>

            <SectionStyles>
                <Title>Bora Codar!</Title>
                <Description>
                    <TextMenor>{activity.description}</TextMenor>
                </Description>
            </SectionStyles>

            <SectionStyles>
                <Title>Dicas</Title>
                <Description>
                    {activity.tips.map(tip => (
                        <TextMenor>{tip}</TextMenor>
                    ))}
                </Description>
            </SectionStyles>

            <SectionStyles>
                <Title>Objetivo do código</Title>
                <Bash>
                    <View style={styles.Top}>
                        <View style={styles.red}/>
                        <View style={styles.yellow}/>
                        <View style={styles.green}/>
                    </View>
                    <View style={styles.bottom}>
                        <TextMenor style={styles.arrow}> {'>'} </TextMenor>
                    </View>
                </Bash>
            </SectionStyles>
        </Container>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Icon:{
        marginLeft: 10,
    },
    Top:{
        flexDirection: 'row',
        height: 20,
        backgroundColor: '#1C2124',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    red: {
        marginLeft: 16,
        marginTop: 3,
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: '#FF5A54',
    },
    yellow: {
        marginLeft: 4,
        marginTop: 3,
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: '#E5BF2F',
    },
    green: {
        marginLeft: 4,
        marginTop: 3,
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: '#51C22D',
    },
    bottom: {
        minHeight: 120,
        backgroundColor: '#121212',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    arrow: {
        marginTop: 4,
        marginLeft: 4,
        color: '#008000',
        fontSize: 24,
    }
});

