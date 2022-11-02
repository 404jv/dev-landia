import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import globalTheme from "../../../Global/styles/theme";

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const Content = styled.ScrollView`
  margin: 16px 0px 32px 0px;
`;

export const FinishButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 16px;
  height: 45px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  letter-spacing: 2px;
`;

export const styles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    lineHeight: 40,
    color: globalTheme.colors.blue,
    fontFamily: globalTheme.fonts.bold,
    textAlign: "justify",
  },
  heading2: {
    fontSize: 24,
    lineHeight: 28,
    color: globalTheme.colors.blue,
    fontFamily: globalTheme.fonts.bold,
    marginTop: 16,
    textAlign: "justify",
  },
  heading3: {
    fontSize: 22,
    color: globalTheme.colors.blue,
    lineHeight: 24,
    fontFamily: globalTheme.fonts.bold,
    marginTop: 16,
    textAlign: "justify",
  },
  body: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: globalTheme.fonts.regular,
    textAlign: "justify",
  },
  strong: {
    color: globalTheme.colors.blue,
  },
});
