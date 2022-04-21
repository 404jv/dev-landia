import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
  line-height: 19px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
