import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProgressBar = styled.View`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.stroke};
  margin-top: 12px;
  border-radius: 32px;
`;

interface ProgressBarSizeProps {
  size: number;
}

export const ProgressBarSize = styled.View<ProgressBarSizeProps>`
  height: 10px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.blue};
  width: ${({ size }) => size}%;
`;

export const BarText = styled.Text`
  color: ${({ theme }) => theme.colors.subTitle};
  font-size: 16px;
  margin-left: 5px;
  margin-top: 5px;
`;
