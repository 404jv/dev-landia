import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled.View`
  align-items: center;
  text-align: center;
  width: 80%;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const Border = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-width: 1px;
  margin-top: 4px;
`;
