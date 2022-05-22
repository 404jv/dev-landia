import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

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

interface UserInfos {
  total_coins: number;
  total_xp: number;
}

export function Home(): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  const [maps, setMaps] = useState<MapProps[]>([]);
  const [userInfos, setUserInfos] = useState<UserInfos>();

  function handleAchievements(): void {
    navigation.navigate("Achievements");
  }

  function handleActivity(phase: PhaseProps): void {
    if (phase.current_level === phase.max_level) {
      Alert.alert("Você já completou essa fase!");
      return;
    }

    if (phase.current_level === undefined) {
      Alert.alert("Você ainda não liberou essa fase!");
      return;
    }

    navigation.navigate("Phase", { phase });
  }

  function calculateProgress(currentLevel: number, maxLevel: number): number {
    const percentage = (currentLevel / maxLevel) * 100;
    return Math.floor(percentage);
  }

  const { signOut } = useAuth();

  useFocusEffect(
    React.useCallback(() => {
      const getUserInfos = async (): Promise<void> => {
        try {
          const response = await api.get("/users/profile");
          setUserInfos(response.data);
        } catch (error) {
          if (error.response.status === 401) {
            signOut();
          }
        }
      };

      const getTree = async (): Promise<void> => {
        try {
          const response = await api.get("/game/tree");
          setMaps(
            response.data.sort(function compare(a, b) {
              if (a.order > b.order) return -1;
              if (a.order < b.order) return 1;
              return 0;
            })
          );
        } catch (error) {
          if (error.response.status === 401) {
            signOut();
          }
        }
      };

      getUserInfos();
      getTree();
    }, [])
  );

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
            <CoinValue>{userInfos?.total_coins}</CoinValue>
          </CoinView>

          <CoinView>
            <Image source={xpCoin} />
            <CoinValue>{userInfos?.total_xp}</CoinValue>
          </CoinView>

          <CoinView>
            <TouchableOpacity
              onPress={handleAchievements}
              style={{ flexDirection: "row" }}
            >
              <Image source={medalCoin} />
              <CoinValue>0</CoinValue>
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
                onPress={() => handleActivity(phase)}
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
