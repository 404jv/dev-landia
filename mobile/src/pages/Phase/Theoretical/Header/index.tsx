import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components";

import { Border, Container, Title, TitleContainer } from "./styles";

type Props = {
  title: string;
};

export function Header({ title }: Props): JSX.Element {
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
