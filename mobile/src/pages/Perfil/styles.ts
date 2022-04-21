import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  flex-direction: row;

  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.blue};
`;

export const Icon = styled(Feather)`
  margin-left: 18px;
  color: #1f6feb;
  font-size: 27px;
`;

export const ContainerHeaderText = styled.View`
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
`;

export const ContainerPerfil = styled.View`
  margin-top: 46px;
  margin-left: 18px;
  flex-direction: row;
  width: 100%;
`;

export const ContainerImage = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  border-width: 3px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.stroke};
  justify-content: center;
  align-items: center;
`;

export const ContainerEditImage = styled.TouchableOpacity`
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.stroke};
  border-radius: 19px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.blue};
  position: relative;
  top: 10px;
  right: 20px;
`;

export const ContainerInfos = styled.View`
  max-width: 240px;
  width: 100%;
  margin-left: 10px;
`;

export const Name = styled.Text`
  width: 100%;
  font-size: 36px;
  line-height: 42px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
`;

export const Username = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subTitle};
`;

export const Bio = styled.Text`
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.description};
`;

export const StatisticsTitle = styled.Text`
  margin-top: 38px;
  margin-left: 20px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue};
`;

export const ContainerStatisticsCards = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 12px;
  justify-content: space-between;
`;
