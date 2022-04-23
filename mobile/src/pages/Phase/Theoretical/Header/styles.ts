import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 12px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue};
`;
