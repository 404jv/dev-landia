import React, { useState } from "react";
import * as Yup from "yup";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Alert, StatusBar } from "react-native";
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
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

export function SignUp(): JSX.Element {
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  async function handleSignUp(): Promise<void> {
    try {
      const schema = Yup.object().shape({
        user: Yup.string().required("Usuário é obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail é obrigatório"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const userData = await schema.validate({ name, email, user });
      console.log(userData);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      }
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.title} barStyle="dark-content" />
      <Header>
        <Feather name="arrow-left" size={21} color="#47474D" />
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
          />
          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <Input
            iconName="users"
            placeholder="Usuário"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setUser}
            value={user}
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
