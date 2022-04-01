import styled from "styled-components/native";

export const Container = styled.View`
  width: 144px;
  height: 136px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.title};
  border-radius: 8px;
  margin-right: 34px;
`;

export const ContainerNumbers = styled.View`
  width: 116px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.title};
  border-radius: 6px;
  position: absolute;
  margin-top: 105px;
`;
