import { Feather } from "@expo/vector-icons";
import React from "react";
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
  ContainerTexts,
  PhaseType,
  ProgressTitle,
  ContainerProgress,
  ContainerLock,
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

        <ContainerTexts>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </ContainerTexts>

        <PhaseType type={type}>
          {type === "practice" ? "Prática" : "Teórica"}
        </PhaseType>
      </ContainerInfos>

      <ContainerProgress>
        {Number.isNaN(percentage) ? (
          <ContainerLock>
            <Feather name="lock" size={18} color={theme.colors.white} />
          </ContainerLock>
        ) : (
          <>
            <ProgressTitle>
              {Number.isNaN(percentage) ? 0 : percentage}% completo
            </ProgressTitle>

            <ContainerProgressBar>
              <ProgressBar
                percentage={Number.isNaN(percentage) ? 0 : percentage}
              />
            </ContainerProgressBar>
          </>
        )}
      </ContainerProgress>
    </Container>
  );
}
