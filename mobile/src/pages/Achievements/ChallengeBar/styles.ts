import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressBar = styled.View`
  height: 14px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.stroke};
  border-radius: 32px;
`;

interface ProgressBarSizeProps {
  size: number;
}

export const ProgressBarSize = styled.View<ProgressBarSizeProps>`
  height: 14px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.blue};
  width: ${({ size }) => size}%;
`;

export const BarText = styled.Text`
  color: ${({ theme }) => theme.colors.subTitle};
  font-size: 16px;
  margin-left: 10px;
`;
