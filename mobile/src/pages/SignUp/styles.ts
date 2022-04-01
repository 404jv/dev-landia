import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type IChangeScreen = {
  isActive: boolean;
}

export const Container = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
      flexGrow: 1,
      backgroundColor: theme.colors.title
  }
}))`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.title};
  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Header = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerChangeScreen = styled.View`
  flex-direction: row;
`

export const ChangeScreen = styled.View<IChangeScreen>`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  margin-left: 2px;
  background-color: ${props => props.isActive ? '#47474D' : '#C4C4C4'};
`

export const ContentContainer = styled.View`
  padding-left: 40px;
  padding-right: 40px;
`

export const Title = styled.Text`
  margin-top: 42px;
  font-size: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.black_title};
  font-family: ${({ theme }) => theme.fonts.medium};
  max-width: 180px;
`;

export const FormTitle = styled.Text`
  margin-top: 60px;
  font-size: ${RFValue(19)}px;
  line-height: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.black_subTitle};
`

export const Form = styled.View`
  margin-top: 36px;
  margin-bottom: 55px;
`