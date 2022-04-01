import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center'
  }
}))`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${getStatusBarHeight() + 100}px;
  padding-left: 40px;
  padding-right: 40px;
`;


export const Logo = styled.Image``;

export const Title = styled.Text`
  margin-top: 110px;
  margin-bottom: 110px;
  font-size: ${RFValue(34)}px;
  line-height: ${RFValue(39)}px;
  color: #ededed;
  font-weight: 500;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background: #ededed;
  width: 92px;
  height: 54px;
  justify-content: center;
  align-items: center;
`;

