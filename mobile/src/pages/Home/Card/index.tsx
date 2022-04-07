import React from "react";

import { CardIcon, Container, Percentage, CardInfo } from "./styles";

export function Card(): JSX.Element {
  return (
    <Container>
      <CardInfo>
        <CardIcon name="play-circle" />
        <Percentage>50%</Percentage>
      </CardInfo>
    </Container>
  );
}
