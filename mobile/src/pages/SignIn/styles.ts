import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: theme.colors.title
  }
}))`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.title};
    padding-top: ${getStatusBarHeight() + 55}px;
    padding-left: 40px;
    padding-right: 40px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
    margin-top: 42px;
    font-size: ${RFValue(34)}px;
    color: ${({ theme }) => theme.colors.black_title};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const SubTitle = styled.Text`
    margin-top: 16px;
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.black_subTitle};
`;

export const Form = styled.View`
    margin-top: 60px;
    margin-bottom: 55px;
`;

export const SignUp = styled.View`
    margin-top: 12px;
    width: 100%;
    height: 54px;
    align-items: center;
    justify-content: center;
`;

export const SignUpText = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.black_title};
`;
