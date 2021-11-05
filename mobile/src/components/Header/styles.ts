import styled from "styled-components/native"

export const MenuBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  text-align: center;
`;
