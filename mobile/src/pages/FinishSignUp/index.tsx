import React from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components";
import { Container, Logo, Title, Button } from "./styles";
import LogoPng from "../../assets/logo.png";

export function FinishSignUp(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Logo source={LogoPng} />
      <Title>Cadastro realizado com sucesso!</Title>
      <Button>
        <Text style={{ fontSize: 20, color: theme.colors.background }}>OK</Text>
      </Button>
    </Container>
  );
}
