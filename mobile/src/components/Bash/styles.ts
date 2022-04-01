import styled from "styled-components/native";

export const BashContainer = styled.View`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
`;

export const Circle = styled.View`
  margin-left: 4px;
  margin-top: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Body = styled.View`
  min-height: 120px;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Arrow = styled.Text`
  color: #008000;
  margin-top: 4px;
  margin-bottom: 2px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const BashContent = styled.View`
  flex-direction: row;
  margin-left: 16px;
  flex-wrap: wrap;
`;

export const BashText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
