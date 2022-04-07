import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 124px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  flex-direction: row;
`;

export const CardInfo = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
`;

export const CardIcon = styled(Feather)`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 6px;
`;

export const Percentage = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;
