import React from "react";

import { StatusBar, Text } from "react-native";

import { useTheme } from "styled-components";

import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Title, Button } from "./styles";

import LogoPng from "../../assets/logo.png";

export function FinishSignUp(): JSX.Element {
  const navigation = useNavigation();
  const theme = useTheme();

  function handleGoBack(): void {
    navigation.navigate("SignIn");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <Logo source={LogoPng} />

      <Title>Cadastro realizado com sucesso!</Title>

      <Button onPress={handleGoBack}>
        <Text style={{ fontSize: 20, color: theme.colors.background }}>OK</Text>
      </Button>
    </Container>
  );
}
