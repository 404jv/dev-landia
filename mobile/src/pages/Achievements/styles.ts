import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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
  justify-content: center;
  padding: 0 10px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 30px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Separator = styled.View`
  height: 20px;
`;
