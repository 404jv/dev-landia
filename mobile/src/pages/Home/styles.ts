import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.stroke};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  height: ${RFValue(80)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CoinView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

export const CoinValue = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-left: 6px;
`;

export const Phases = styled.View`
  align-items: center;
  padding: 10px;
`;

interface PhasePositionProps {
  keyPosition: number;
}

export const PhasePosition = styled.View<PhasePositionProps>`
  ${({ keyPosition }) =>
    keyPosition === 1 &&
    css`
      margin-top: 20px;
    `}

  ${({ keyPosition }) =>
    keyPosition === 2 &&
    css`
      margin-right: 200px;
    `}

    ${({ keyPosition }) =>
    keyPosition === 3 &&
    css`
      margin-left: 200px;
      margin-top: -70px;
    `}

    ${({ keyPosition }) =>
    keyPosition === 4 &&
    css`
      margin-top: 40px;
      margin-bottom: 30px;
    `}
`;
