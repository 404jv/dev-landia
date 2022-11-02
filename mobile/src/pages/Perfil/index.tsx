import React, { useEffect, useState } from "react";
import { StatusBar, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import wizard from "../../assets/wizard.png";
import coin from "../../assets/gold.png";
import medal from "../../assets/medal.png";
import potion from "../../assets/xp.png";

import { StatisticsCard } from "./StatisticsCard";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { UserInfos } from "./IPerfil";

import {
  Container,
  ContainerPerfil,
  ContainerHeaderText,
  ContainerImage,
  Header,
  HeaderTitle,
  Icon,
  ContainerInfos,
  Name,
  Username,
  Bio,
  StatisticsTitle,
  ContainerStatisticsCards,
  ContainerEditImage,
} from "./styles";

export function Perfil(): JSX.Element {
  const [userInfos, setUserInfos] = useState<UserInfos>();

  const { signOut } = useAuth();

  useEffect(() => {
    async function getProfile(): Promise<void> {
      try {
        const response = await api.get("users/profile");
        setUserInfos(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          signOut();
        }
      }
    }

    getProfile();
  }, []);

  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />

      <Header>
        <Icon name="user" />
        <ContainerHeaderText>
          <HeaderTitle>Perfil</HeaderTitle>
        </ContainerHeaderText>
      </Header>

      <ContainerPerfil>
        <ContainerImage>
          <Image source={wizard} />
        </ContainerImage>

        <ContainerEditImage activeOpacity={0.8}>
          <Feather name="edit-2" size={9} color={theme.colors.title} />
        </ContainerEditImage>

        <ContainerInfos>
          <Name>{userInfos?.name}</Name>
          <Username>{userInfos?.username}</Username>
          <Bio>{userInfos?.biography}</Bio>
        </ContainerInfos>
      </ContainerPerfil>

      <StatisticsTitle>Estatísticas</StatisticsTitle>

      <ContainerStatisticsCards>
        <StatisticsCard
          name="Moedas"
          number={userInfos?.total_coins}
          image={coin}
        />
        <StatisticsCard
          name="Experiência"
          number={userInfos?.total_xp}
          image={potion}
        />
        <StatisticsCard name="Medalhas" number={0} image={medal} />
      </ContainerStatisticsCards>
    </Container>
  );
}
