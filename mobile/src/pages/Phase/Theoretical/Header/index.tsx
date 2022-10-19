import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";

import { Border, Container, Title, TitleContainer } from "./styles";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoHome(): void {
    navigation.navigate("Home");
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handleGoHome}>
          <MaterialIcons
            name="arrow-back"
            size={32}
            color={theme.colors.blue}
          />
        </TouchableOpacity>

        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </Container>
      <Border />
    </>
  );
}
