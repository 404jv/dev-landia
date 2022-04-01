import React from "react";
import { Container, Logo, Title, Button } from "./styles";
import LogoPng from "../../assets/logo.png"
import { Text } from "react-native";
import { useTheme } from "styled-components";

export function FinishSignUp() {
  const theme = useTheme();

  return (
    <Container>
      <Logo source={LogoPng}/>
      <Title>Cadastro realizado com sucesso!</Title>
      <Button>
        <Text style={{ fontSize: 20, color: theme.colors.background }}>
          OK
        </Text>
      </Button>
    </Container>
  )
}