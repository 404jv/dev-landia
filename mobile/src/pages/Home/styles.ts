import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 32px;
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

export const CardSeparator = styled.View`
  height: 12px;
`;

export const MapInfos = styled.View`
  align-items: center;
  justify-content: center;
`;

export const MapImage = styled.Image`
  width: 69px;
  height: 57px;
  margin-top: 10px;
`;

export const MapTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  align-self: center;
  margin-bottom: 15px;
`;

export const CardWrapper = styled.View`
  padding: 0px 16px;
  margin-bottom: 12px;
`;
