import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  percentage: number;
};

type ContainerIconProps = {
  backgroundColor: string;
};

type PhaseTypeProps = {
  type: string;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 12px 9px;

  border-radius: 8px;
`;

export const ContainerInfos = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ContainerIcon = styled.View<ContainerIconProps>`
  width: 70px;
  height: 57px;

  align-items: center;
  justify-content: center;
  margin-right: 13px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContainerTitleAndPhase = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PhaseType = styled.Text<PhaseTypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme, type }) =>
    type === "practice"
      ? theme.colors.practiceActivity
      : theme.colors.theoreticalActivity};

  text-transform: uppercase;
`;

export const CardIcon = styled.Image``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.description};
`;

export const ContainerProgress = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`;

export const ContainerLock = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
`;

export const LockTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;

export const ProgressTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 13px;
`;

export const ContainerProgressBar = styled.View`
  flex: 1;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.stroke};
  border-radius: 2px;
`;

export const ProgressBar = styled.View<Props>`
  width: ${({ percentage }) => percentage}%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 2px;
`;
