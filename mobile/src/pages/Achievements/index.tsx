import React from "react";
import { StatusBar, TouchableNativeFeedback, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { ChallengeCards } from "./ChallengeCards";

import { Container, Header, Icon, HeaderContent, HeaderTitle } from "./styles";

export function Achievements(): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleBackHome(): void {
    navigation.navigate("Home");
  }

  const cardData = [
    {
      id: String(new Date()),
      title: "Treinamento do cadete",
      description: "Complete  a primeira fase e alcance o nível 2.",
      maxChallenge: 2,
      currentChallenge: 1,
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />

      <Header>
        <TouchableNativeFeedback onPress={handleBackHome}>
          <Icon name="arrow-left" />
        </TouchableNativeFeedback>

        <HeaderContent>
          <HeaderTitle>Medalhas</HeaderTitle>
        </HeaderContent>
      </Header>

      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 10,
          paddingBottom: 12,
        }}
        renderItem={({ item }) => <ChallengeCards data={item} />}
      />
    </Container>
  );
}
