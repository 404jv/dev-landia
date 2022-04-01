import React from "react";
import {
  StatusBar,
  Image,
  ImageSourcePropType,
  View,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
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
import wizard from "../../assets/wizard.png";
import coin from "../../assets/gold.png";
import medal from "../../assets/medal.png";
import potion from "../../assets/xp.png";
import { StatisticsCard } from "./StatisticsCard";

interface StatisticItem {
  name: string;
  number: number;
  image: ImageSourcePropType;
}

export function Perfil(): JSX.Element {
  const theme = useTheme();

  const data = [
    {
      name: "Coin",
      number: 23,
      image: coin,
    },
    {
      name: "Experience",
      number: 232,
      image: potion,
    },
    {
      name: "Medals",
      number: 17,
      image: medal,
    },
  ];

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
          <Name>Ruan Pablo</Name>
          <Username>@NaPpY</Username>
          <Bio>🙃 this is not the end</Bio>
        </ContainerInfos>
      </ContainerPerfil>

      <StatisticsTitle>Estatísticas</StatisticsTitle>

      <ContainerStatisticsCards>
        <StatisticsCard name="Coin" number={23} image={coin} />
        <StatisticsCard name="Experience" number={232} image={potion} />
      </ContainerStatisticsCards>
      <ContainerStatisticsCards>
        <StatisticsCard name="Medals" number={17} image={medal} />
      </ContainerStatisticsCards>
    </Container>
  );
}
