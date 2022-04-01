import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, IconHome } from "./styles";

export function CustomTabBarButton({ name, size, color }): JSX.Element {
  return (
    <Container>
      <IconHome>
        <Feather name={name} size={size} color={color} />
      </IconHome>
    </Container>
  );
}
