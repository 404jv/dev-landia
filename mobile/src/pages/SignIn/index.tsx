import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import logoPng from "../../assets/logo.png";
import { SignInButton } from "./SignInButton";

import googlePng from "../../assets/google.png";
import applePng from "../../assets/apple.png";

import {
  Container,
  Header,
  Logo,
  Description,
  Label,
  Footer,
  ButtonGroup,
} from "./styles";

export function SignIn(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.blue} />

      <Header>
        <Logo source={logoPng} />

        <Description>
          Leve suas dev skills{"\n"}a um novo nível{"\n"}
          de forma divertida
        </Description>

        <Label>
          Faça seu login com{"\n"}
          uma das contas abaixo
        </Label>
      </Header>
      <Footer>
        <ButtonGroup>
          <SignInButton title="Entrar com Google" icon={googlePng} />
          <SignInButton title="Entrar com Apple" icon={applePng} />
        </ButtonGroup>
      </Footer>
    </Container>
  );
}
