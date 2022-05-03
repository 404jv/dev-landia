import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  CardIcon,
  Container,
  Percentage,
  CardInfo,
  CardTexts,
  Title,
  Description,
  ContainerInfos,
  ProgressBar,
  ContainerProgressBar,
} from "./styles";

interface CardProps extends TouchableOpacityProps {
  name: string;
  description: string;
  percentage: number;
}

export function Card({
  name,
  description,
  percentage,
  ...rest
}: CardProps): JSX.Element {
  return (
    <Container {...rest} activeOpacity={0.8}>
      <ContainerInfos>
        <CardInfo>
          <CardIcon
            name="play-circle"
            percentage={Number.isNaN(percentage) ? 0 : percentage}
          />
          <Percentage percentage={Number.isNaN(percentage) ? 0 : percentage}>
            {Number.isNaN(percentage) ? (
              <Feather name="lock" size={18} />
            ) : (
              `${percentage}%`
            )}
          </Percentage>
        </CardInfo>
        <CardTexts>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </CardTexts>
      </ContainerInfos>
      <ContainerProgressBar>
        <ProgressBar percentage={Number.isNaN(percentage) ? 0 : percentage} />
      </ContainerProgressBar>
    </Container>
  );
}
