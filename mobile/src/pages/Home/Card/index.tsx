import React from "react";

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

interface CardProps {
  name: string;
  description: string;
  percentage: number;
}

export function Card({
  name,
  description,
  percentage,
}: CardProps): JSX.Element {
  return (
    <Container>
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
