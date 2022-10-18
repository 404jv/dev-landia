import React, { useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Root, Popup } from "popup-ui";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Button } from "../../components/Form/Button";
import { PasswordInput } from "../../components/Form/PasswordInput";

import { api } from "../../services/api";

import { UserDataInfos } from "./INextSignUp";

import {
  ChangeScreen,
  Container,
  ContainerChangeScreen,
  ContainerTerms,
  ContentContainer,
  Form,
  FormTitle,
  Header,
  TextTerms,
  Title,
  CheckBox,
} from "./styles";

export function NextSignUp(): JSX.Element {
  const route = useRoute().params as UserDataInfos;
  const { userData } = route;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termIsAccepted, setTermIsAccepted] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack(): void {
    navigation.goBack();
  }

  async function handleFinishSignUp(): Promise<void> {
    if (!password || !confirmPassword) {
      Popup.show({
        type: "Danger",
        title: "Senha",
        button: true,
        textBody: "A senha é obrigatória",
        buttonText: "Ok",
        callback: () => Popup.hide(),
      });
      return;
    }

    if (password !== confirmPassword) {
      Popup.show({
        type: "Danger",
        title: "Senha",
        button: true,
        textBody: "Senhas não conferem",
        buttonText: "Ok",
        callback: () => Popup.hide(),
      });
      return;
    }

    if (!termIsAccepted) {
      Popup.show({
        type: "Danger",
        title: "Termo de uso",
        button: true,
        textBody: "Por favor, aceite os termos de uso",
        buttonText: "Ok",
        callback: () => Popup.hide(),
      });
      return;
    }

    await api
      .post("users/create", {
        name: userData.name,
        email: userData.email,
        username: userData.user,
        password,
      })
      .then(() => {
        navigation.navigate("FinishSignUp");
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;

        if (
          errorMessage ===
          `The email '${userData.email}' is already registered!`
        ) {
          return Popup.show({
            type: "Warning",
            title: "Email",
            button: true,
            textBody: "Email já cadastrado",
            buttonText: "Ok",
            callback: () => Popup.hide(),
          });
        }

        if (
          errorMessage ===
          `The username '${userData.user}' is already registered!`
        ) {
          return Popup.show({
            type: "Warning",
            title: "Usuário",
            button: true,
            textBody: "Usuário já cadastrado",
            buttonText: "Ok",
            callback: () => Popup.hide(),
          });
        }

        return Popup.show({
          type: "Danger",
          title: "Erro",
          button: true,
          textBody: "Erro ao realizar cadastro :(",
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
      });
  }

  return (
    <Root>
      <Container>
        <StatusBar
          backgroundColor={theme.colors.title}
          barStyle="dark-content"
        />
        <Header>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={21} color="#47474D" />
          </TouchableOpacity>

          <ContainerChangeScreen>
            <ChangeScreen isActive={false} />
            <ChangeScreen isActive />
          </ContainerChangeScreen>
        </Header>
        <ContentContainer>
          <Title>cadastre-se{"\n"}abaixo</Title>

          <FormTitle>2. Senha</FormTitle>

          <Form>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Confirmar senha"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </Form>

          <ContainerTerms>
            <CheckBox
              activeOpacity={0.8}
              isActive={termIsAccepted}
              onPress={() => setTermIsAccepted(!termIsAccepted)}
            />
            <TextTerms>Termos de uso</TextTerms>
          </ContainerTerms>

          <Button
            title="Cadastrar"
            bgColor={theme.colors.blue}
            textColor={theme.colors.white}
            onPress={handleFinishSignUp}
          />
        </ContentContainer>
      </Container>
    </Root>
  );
}
