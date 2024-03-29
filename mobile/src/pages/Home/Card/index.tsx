import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import iconPhase from "../../../assets/icon_phase.png";

import {
  CardIcon,
  Container,
  Content,
  Title,
  Description,
  ContainerInfos,
  ProgressBar,
  ContainerProgressBar,
  ContainerIcon,
  PhaseType,
  ProgressTitle,
  ContainerProgress,
  ContainerLock,
  ContainerTitleAndPhase,
  LockTitle,
} from "./styles";

interface CardProps extends TouchableOpacityProps {
  name: string;
  description: string;
  percentage: number;
  type: string;
  hexadecimal_color: string;
}

export function Card({
  name,
  description,
  hexadecimal_color,
  type,
  percentage,
  ...rest
}: CardProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container {...rest} activeOpacity={0.8}>
      <ContainerInfos>
        <ContainerIcon backgroundColor={hexadecimal_color}>
          <CardIcon source={iconPhase} />
        </ContainerIcon>

        <Content>
          <ContainerTitleAndPhase>
            <Title>{name}</Title>

            <PhaseType type={type}>
              {type === "practice" ? "Prática" : "Teórica"}
            </PhaseType>
          </ContainerTitleAndPhase>

          <Description>{description}</Description>
        </Content>
      </ContainerInfos>

      {Number.isNaN(percentage) ? (
        <ContainerLock>
          <Feather name="lock" size={18} color={theme.colors.white} />
        </ContainerLock>
      ) : (
        <ContainerProgress>
          <ProgressTitle>
            {Number.isNaN(percentage) ? 0 : percentage}% completo
          </ProgressTitle>

          <ContainerProgressBar>
            <ProgressBar
              percentage={Number.isNaN(percentage) ? 0 : percentage}
            />
          </ContainerProgressBar>
        </ContainerProgress>
      )}
    </Container>
  );
}
