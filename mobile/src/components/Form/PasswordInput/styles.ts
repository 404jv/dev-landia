import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

interface Props {
    isFocused?: boolean;
};

export const Container = styled.View`
   width: 100%;
   height: 54px;
   background-color: ${({ theme }) => theme.colors.title};
   flex-direction: row;
   margin-bottom: 14px;
`;

export const IconContainer = styled.View<Props>`
    height: 54px;
    width: 54px;
    background-color: ${({ theme }) => theme.colors.title};
    align-items: center;
    justify-content: center;

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.blue};
    `}
`;

export const InputText = styled(TextInput) <Props>`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.title};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(18)}px;
    padding: 0px 10px;

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.blue};
    `}
`;