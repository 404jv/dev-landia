import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;


export const Header = styled.View`
    width: 100%;
    height: ${RFValue(80)}px;
    border-bottom-width: 2px;
    border-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 30px;
`;

export const HeaderContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
`;

export const HeaderTitle = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ChallengeCard = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const ChallengeImage = styled.View`
    width: 110px;
    height: 110px;
    background-color: ${({ theme }) => theme.colors.stroke};

    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(14)}px;
`;

export const Image = styled.Image``;

export const ChallengeContent = styled.View`
    margin-left: 10px;
`;

export const ChallengeTitle = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 22px;
`;

export const ChallengeDescription = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    width: 80%;
`;
