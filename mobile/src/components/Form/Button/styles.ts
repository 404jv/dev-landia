import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps extends TouchableOpacityProps {
    bgColor?: string;
    textColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
   width: 100%;
   height: 54px;
   align-items: center;
   justify-content: center;

   background-color: ${({ theme, bgColor }) => bgColor};
`;

export const Title = styled.Text<ButtonProps>`
    font-size: ${RFValue(20)}px;

    color: ${({ theme, textColor }) => textColor};
`;