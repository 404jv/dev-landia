import React, { useState } from "react";
import { Root, Popup } from "popup-ui";
import * as Yup from "yup";

import { Alert, StatusBar, TouchableOpacity } from "react-native";

import { useTheme } from "styled-components";

import { useNavigation } from "@react-navigation/native";
import LogoPng from "../../assets/BlueLogo.png";
import { Button } from "../../components/Form/Button";

import { Input } from "../../components/Form/Input";
import { PasswordInput } from "../../components/Form/PasswordInput";

import {
  Container,
  Logo,
  Title,
  SubTitle,
  Form,
  SignUp,
  SignUpText,
} from "./styles";
import { useAuth } from "../../hooks/auth";

export function SignIn(): JSX.Element {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(): Promise<void> {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail é obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha é obrigatória"),
      });

      await schema.validate({ email: email.trim(), password });
      await signIn(email.trim(), password);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Popup.show({
          type: "Danger",
          title: "Erro na validação",
          button: true,
          textBody: error.message,
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }
  }

  function handleSignUpScreen(): void {
    navigation.navigate("SignUp");
  }

  return (
    <Root>
      <Container>
        <StatusBar
          backgroundColor={theme.colors.title}
          barStyle="dark-content"
        />
        <Logo source={LogoPng} />

        <Title>
          Faça seu login ou{"\n"}
          cadastre-se
        </Title>

        <SubTitle>
          Faça seu login para começar{"\n"}
          uma experiência incrível.
        </SubTitle>

        <Form>
          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />

          <PasswordInput
            iconName="lock"
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />
        </Form>

        <Button
          title="Login"
          bgColor={theme.colors.blue}
          textColor={theme.colors.white}
          onPress={handleSignIn}
        />

        <SignUp>
          <TouchableOpacity onPress={handleSignUpScreen}>
            <SignUpText>Criar conta gratuita</SignUpText>
          </TouchableOpacity>
        </SignUp>
      </Container>
    </Root>
  );
}
