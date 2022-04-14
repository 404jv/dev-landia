import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import globalTheme from "../../../Global/styles/theme";

type Props = {
  percentage: number;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
`;

export const ContainerInfos = styled.View`
  width: 100%;
  height: 134px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  flex-direction: row;
`;

export const CardInfo = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  margin-left: 14px;
`;

// eslint-disable-next-line prettier/prettier
export const CardIcon = styled(Feather) <Props>`
  font-size: 60px;
  color: ${({ percentage }) =>
    percentage === 100
      ? globalTheme.colors.progressBar
      : globalTheme.colors.title};
  margin-bottom: 6px;
`;

export const Percentage = styled.Text<Props>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ percentage }) =>
    percentage === 100
      ? globalTheme.colors.progressBar
      : globalTheme.colors.title};
`;

export const CardTexts = styled.View`
  max-width: 230px;
  width: 100%;
  flex-direction: column;
  margin-top: 6px;
  margin-left: 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.description};
`;

export const ContainerProgressBar = styled.View`
  margin-top: -14px;
  width: 100%;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.stroke};
  border-radius: 12px;
`;

export const ProgressBar = styled.View<Props>`
  width: ${({ percentage }) => percentage}%;
  height: 14px;
  background-color: ${({ percentage }) =>
    percentage === 100
      ? globalTheme.colors.progressBar
      : globalTheme.colors.blue};
  border-radius: 12px;
`;
