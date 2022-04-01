import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFPercentage(65)}px;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: 70px;
`;

export const Description = styled.Text`
  font-size: 38px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: 60px;
`;

export const Label = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  margin-top: 90px;
`;

export const Footer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonGroup = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin-top: -25.5px;
`;
