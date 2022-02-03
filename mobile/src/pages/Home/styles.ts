import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex: 1;
    /* background-color: ${({ theme }) => theme.colors.background}; */
    background-color: #22282B;
`;


export const Header = styled.View`
    background-color: #1C2124;
    width: 100%;
    height: ${RFValue(54)}px;
    border-color: #2F3437;
    border-bottom-width: 1px;
    border-style: solid;


    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Coin = styled.View`
    margin-left: 20px;
    align-items: center;
    flex-direction: row;
`;

export const CoinText = styled.Text`
    margin-left: 5px;
    font-size: 20px;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LevelContainerI = styled.View`
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const LevelContainerII = styled.View`
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const FirstStep = styled.View`
    margin-top: 40px;
`;

export const SecondStep = styled.View`
    margin-bottom: 40px;
`;


