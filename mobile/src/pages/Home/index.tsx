import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Card } from "./Card";

import goldCoin from "../../assets/gold.png";
import xpCoin from "../../assets/xp.png";
import medalCoin from "../../assets/medal.png";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import {
  Container,
  Header,
  Content,
  CoinView,
  Image,
  CoinValue,
  CardSeparator,
  MapTitle,
  CardWrapper,
} from "./styles";

type PhaseProps = {
  created_at: string;
  id: string;
  map_id: string;
  description: string;
  markdown_text?: string | null;
  max_level?: number | null;
  order: number;
  title: string;
  type: string;
  current_level: number;
};

interface MapProps {
  created_at: string;
  id: string;
  description: string;
  is_done: boolean;
  order: number;
  title: string;
  phases: PhaseProps[];
}

export function Home(): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  const [maps, setMaps] = useState<MapProps[]>([]);

  function handleAchievements(): void {
    navigation.navigate("Achievements");
  }

  function handleActivity(): void {
    navigation.navigate("Activity");
  }

  function calculateProgress(currentLevel: number, maxLevel: number): number {
    const percentage = (currentLevel / maxLevel) * 100;
    return Math.floor(percentage);
  }

  const { signOut } = useAuth();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function getTree() {
      try {
        const response = await api.get("/game/tree");
        setMaps(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          signOut();
        }
      }
    }

    getTree();
  }, []);
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

      {maps.map((map) => (
        <View key={map.id}>
          <MapTitle>{map.title}</MapTitle>
          {map.phases.map((phase) => (
            <CardWrapper key={phase.id}>
              <Card
                name={phase.title}
                description={phase.description}
                percentage={calculateProgress(
                  phase.current_level,
                  phase.max_level
                )}
              />
            </CardWrapper>
          ))}
        </View>
      ))}
    </Container>
  );
}
