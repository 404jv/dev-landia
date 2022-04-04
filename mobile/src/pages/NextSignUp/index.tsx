import { Feather } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StatusBar, Alert, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Form/Button";
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
} from "./styles";
import { PasswordInput } from "../../components/Form/PasswordInput";
import { useAuth } from "../../hooks/auth";

interface UserDataInfos {
  userData: {
    name: string;
    email: string;
    user: string;
  };
}

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

  // eslint-disable-next-line consistent-return
  async function handleFinishSignUp(): Promise<void> {
    if (!password || !confirmPassword) {
      return Alert.alert("Erro", "Preencha todos os campos");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Senhas não conferem");
    }

    if (!termIsAccepted) {
      return Alert.alert("Aceite os termos de uso");
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.title} barStyle="dark-content" />
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
            value={termIsAccepted}
            onValueChange={() => setTermIsAccepted(!termIsAccepted)}
            style={{
              marginRight: 26,
              width: 23,
              height: 23,
              backgroundColor: theme.colors.text_detail,
              borderWidth: 0,
            }}
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
  );
}
