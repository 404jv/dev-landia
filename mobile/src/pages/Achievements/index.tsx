import React from "react";
import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";

import { ChallengeCards } from "./ChallengeCards";

import { Container, Header, HeaderTitle, Separator } from "./styles";

export function Achievements(): JSX.Element {
  const theme = useTheme();

  const cardData = [
    {
      id: "4321",
      title: "Treinamento do cadete",
      description: "Complete  a primeira fase e alcance o nível 2.",
      maxChallenge: 2,
      currentChallenge: 1,
    },
    {
      id: "1234",
      title: "Treinamento do cadete",
      description: "Complete  a primeira fase e alcance o nível 2.",
      maxChallenge: 2,
      currentChallenge: 2,
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
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => <ChallengeCards data={item} />}
      />
    </Container>
  );
}
