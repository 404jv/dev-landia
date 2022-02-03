import { Feather, MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Image } from 'react-native';



export const Container = styled.View`
    background-color: #22282B;
    flex: 1;

`;


export const Header = styled.View`
    width: 100%;
    height: 80px;

    align-items: center;
    flex-direction: row;
    border-bottom-width: 1px;
    border-style: solid;
    border-bottom-color: #45A7AD;
`;


export const HeaderText = styled.Text`
    color: #45A7AD;
    font-size: 23px;
    margin-left: ${RFValue(116)}px;
`;


export const Icon = styled(Feather)`
    color: #45A7AD;
    font-size: 27px;
    margin-left: ${RFValue(18)}px;
`;


export const PerfilInfo = styled.View`
    width: 100%;
    height: 122px;
    flex-direction: row;
    align-items: center;
`;

export const PerfilImageContainer = styled.View`
    margin: 18px;
    width: 90px;
    height: 90px;
    background-color: #C4C4C4;
    border-radius: 45px;
    border-width: 3px;
    border-style: solid;
    border-color: #45A7AD;
`;

export const PerfilEdit = styled.View`
    width: 25px;
    height: 25px;
    background-color: #C4C4C4;
    border-radius: 12.5px;
    border-width: 2px;
    border-style: solid;
    border-color: #45A7AD;
    position: absolute;
    right: 0;
    align-items: center;
    justify-content: center;
`;


export const PerfilEditIcon = styled(MaterialIcons)`
    font-size: 14px;
`;

export const PerfilContent = styled.View`
    margin-left: 20px;
`;

export const UserName = styled.Text`
    color: #FFF;
    font-size: 28px;
`;

export const UserId = styled.Text`
    margin-top: -5px;
    color: #9FA2A5;
    font-size: 14px;
`;

export const UserDescription = styled.Text`
    color: #C9C9C9;
    font-size: 14px;
    margin-top: 5px;
`;

export const PerfilCoinsView = styled.View`
    flex: 1;
    margin: 18px;
`;

export const CoinStats = styled.Text`
    color: #36B1BF;
    font-size: 20px;
`;

export const CoinView = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

export const PerfilImage = styled(Image)`
    width: 85px;
    height: 85px;
    border-radius: 42.5px;
`;