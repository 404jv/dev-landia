import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';



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