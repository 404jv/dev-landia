import React from "react";
import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";

import { ChallengeCards } from "./ChallengeCards";

import { Container, Header, HeaderTitle } from "./styles";

export function Achievements(): JSX.Element {
  const theme = useTheme();

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
        <HeaderTitle>Medalhas</HeaderTitle>
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
