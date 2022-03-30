import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   width: 100%;
   height: 54px;
   background-color: ${({ theme }) => theme.colors.title};
   flex-direction: row;
   margin-bottom: 14px;
`;

export const IconContainer = styled.View`
    height: 54px;
    width: 54px;
    background-color: ${({ theme }) => theme.colors.title};
    align-items: center;
    justify-content: center;
`;

export const InputText = styled.TextInput`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.title};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(18)}px;
    padding: 0px 10px;
`;