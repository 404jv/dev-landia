import React from "react";
import { Text, Image, ImageSourcePropType } from "react-native";
import { Container, ContainerNumbers } from "./styles";

interface StatisticsCardProps {
  number: number;
  name: string;
  image: ImageSourcePropType;
}

export function StatisticsCard({
  number,
  name,
  image,
}: StatisticsCardProps): JSX.Element {
  return (
    <Container>
      <Text
        style={{
          marginTop: 5,
          color: "#ffffff",
          fontSize: 18,
          fontWeight: "500",
          lineHeight: 21,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
      <Image source={image} style={{ marginTop: 9, width: 55, height: 55 }} />
      <ContainerNumbers>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 24,
            fontWeight: "500",
            lineHeight: 28,
          }}
        >
          {number}
        </Text>
      </ContainerNumbers>
    </Container>
  );
}
