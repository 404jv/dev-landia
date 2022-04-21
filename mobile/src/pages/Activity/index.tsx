import React, { useEffect, useState } from "react";

import { useTheme } from "styled-components";
import { StatusBar } from "react-native";

import { useRoute } from "@react-navigation/native";
import { Container, Text } from "./styles";

import { Practical } from "./Practical";

export function Activities(): JSX.Element {
  const theme = useTheme();
  const route = useRoute();
  const { phase } = route.params as any;

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      {phase.type === "practice" ? (
        <Practical PhaseId={phase.id} />
      ) : (
        <Text>markdown</Text>
      )}
    </>
  );
}
