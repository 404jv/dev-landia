import styled from "styled-components/native";

type BoxProps = {
  bgColor: string;
};

export const Box = styled.View<BoxProps>`
  width: 12px;
  height: 12px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const NewLine = styled.View`
  width: 995px;
`;

export const BashText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
