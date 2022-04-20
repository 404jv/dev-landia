import React from "react";
import { TouchableOpacityProps } from "react-native";

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
          <CardIcon name="play-circle" percentage={percentage} />
          <Percentage percentage={percentage}>{percentage}%</Percentage>
        </CardInfo>
        <CardTexts>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </CardTexts>
      </ContainerInfos>
      <ContainerProgressBar>
        <ProgressBar percentage={percentage} />
      </ContainerProgressBar>
    </Container>
  );
}
