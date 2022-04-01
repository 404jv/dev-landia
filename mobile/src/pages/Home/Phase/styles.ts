import styled from "styled-components/native";

export const Container = styled.View`
  width: 90px;
  align-items: center;
`;

export const Icon = styled.View`
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  padding: 20px;
  margin-top: 4px;
`;

export const Level = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 11px;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.stroke};
  left: 60px;
  top: 60px;
`;

export const LevelText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LevelName = styled.Text`
  color: ${({ theme }) => theme.colors.title};
`;
