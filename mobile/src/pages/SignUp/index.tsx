import React, { useState, useRef } from "react";
import { Alert, StatusBar, TouchableOpacity, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import * as Yup from "yup";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

import {
  Title,
  Form,
  FormTitle,
  Container,
  Header,
  ContentContainer,
  ContainerChangeScreen,
  ChangeScreen,
} from "./styles";

export function SignUp(): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  const emailRef = useRef(null);
  const usernameRef = useRef(null);

  async function handleSignUp(): Promise<void> {
    try {
      const schema = Yup.object().shape({
        user: Yup.string().required("Usuário é obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail é obrigatório"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const userData = await schema.validate({
        name: name.trim(),
        email: email.trim(),
        user: user.trim(),
      });
      navigation.navigate("NextSignUp", { userData });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      }
    }
  }

  function handleGoBack(): void {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.title} barStyle="dark-content" />
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="arrow-left" size={21} color="#47474D" />
        </TouchableOpacity>

        <ContainerChangeScreen>
          <ChangeScreen isActive />
          <ChangeScreen isActive={false} />
        </ContainerChangeScreen>
      </Header>
      <ContentContainer>
        <Title>cadastre-se{"\n"}abaixo</Title>

        <FormTitle>1. Dados</FormTitle>

        <Form>
          <Input
            iconName="user"
            placeholder="Nome"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setName}
            value={name}
            onSubmitEditing={() => emailRef.current.focus()}
            blurOnSubmit={false}
          />
          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
            ref={emailRef}
            onSubmitEditing={() => usernameRef.current.focus()}
            blurOnSubmit={false}
          />
          <Input
            iconName="users"
            placeholder="Usuário"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setUser}
            value={user}
            ref={usernameRef}
            onSubmitEditing={() => Keyboard.dismiss()}
            blurOnSubmit={false}
          />
        </Form>

        <Button
          title="Próximo"
          bgColor={theme.colors.blue}
          textColor={theme.colors.white}
          onPress={handleSignUp}
        />
      </ContentContainer>
    </Container>
  );
}
