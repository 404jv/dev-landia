import styled from "styled-components/native";

export const MenuBar = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

export const ProgressMenuBar = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.stroke};
`;
