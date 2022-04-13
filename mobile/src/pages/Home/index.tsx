import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Card } from "./Card";

import goldCoin from "../../assets/gold.png";
import xpCoin from "../../assets/xp.png";
import medalCoin from "../../assets/medal.png";

import {
  Container,
  Header,
  Content,
  CoinView,
  Image,
  CoinValue,
  CardSeparator,
} from "./styles";

export function Home(): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleAchievements(): void {
    navigation.navigate("Achievements");
  }

  function handleActivity(): void {
    navigation.navigate("Activity");
  }

  const data = [
    {
      name: "Introdução",
      description:
        "Entenderemos o básico de T.I e como tudo se conecta com programação.",
      percentage: 100,
    },
    {
      name: "Algoritmo",
      description:
        "Entenderemos o básico de T.I e como tudo se conecta com programação.",
      percentage: 50,
    },
    {
      name: "Estrutura de dados",
      description:
        "Entenderemos o básico de T.I e como tudo se conecta com programação.",
      percentage: 20,
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />

      <Header>
        <Content>
          <CoinView>
            <Image source={goldCoin} />
            <CoinValue>23</CoinValue>
          </CoinView>

          <CoinView>
            <Image source={xpCoin} />
            <CoinValue>232</CoinValue>
          </CoinView>

          <CoinView>
            <TouchableOpacity
              onPress={handleAchievements}
              style={{ flexDirection: "row" }}
            >
              <Image source={medalCoin} />
              <CoinValue>17</CoinValue>
            </TouchableOpacity>
          </CoinView>
        </Content>
      </Header>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 20, marginTop: 40 }}
        keyExtractor={(item) => String(item.name)}
        ItemSeparatorComponent={() => <CardSeparator />}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            description={item.description}
            percentage={item.percentage}
            onPress={handleActivity}
          />
        )}
      />
    </Container>
  );
}
