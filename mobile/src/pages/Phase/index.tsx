import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useTheme } from "styled-components";
import { api } from "../../services/api";

import { Practical } from "./Practical";
import { Theoretical } from "./Theoretical";

import { Container } from "./styles";

import { PhaseParams, PracticeActivity, TheoreticalActivity } from "./IPhase";

export function Phase(): JSX.Element {
  const [practiceActivities, setPracticeActivities] = useState<
    PracticeActivity[]
  >([]);
  const [currentPracticeActivity, setCurrentPracticeActivity] =
    useState<PracticeActivity>();

  const [theoreticalActivity, setTheoreticalActivity] =
    useState<TheoreticalActivity>();

  const [isLoadingPhase, setIsLoadingPhase] = useState(true);

  const theme = useTheme();
  const route = useRoute();

  const { phase } = route.params as PhaseParams;
  const phase_type = phase.type;

  const navigation = useNavigation();

  async function handleNextActivity(isUserAnswer: boolean): Promise<void> {
    if (practiceActivities.length === 1) {
      await api.put(`/game/correct/${phase.id}`, {
        map_id: phase.map_id,
      });
      navigation.navigate("Home");
      return;
    }

    if (isUserAnswer) {
      practiceActivities.shift();
    } else {
      const wrongActivity = practiceActivities.shift();
      practiceActivities.push(wrongActivity);
    }

    setCurrentPracticeActivity(practiceActivities[0]);
  }

  async function loadPracticeActivity(): Promise<void> {
    try {
      const response = await api.get(`/game/practice-phase/${phase.id}`);

      setPracticeActivities(response.data);
      setCurrentPracticeActivity(response.data[0]);
    } catch (error) {
      Alert.alert("Oops! Algo deu errado");
    } finally {
      setIsLoadingPhase(false);
    }
  }

  async function loadTheoreticalPhase(): Promise<void> {
    try {
      const response = await api.get(`/game/theory-phase/${phase.id}`);
      setTheoreticalActivity(response.data);
    } catch (error) {
      Alert.alert("Oops! Algo deu errado");
    } finally {
      setIsLoadingPhase(false);
    }
  }

  useEffect(() => {
    setIsLoadingPhase(true);
    async function loadPhase(): Promise<void> {
      if (phase_type === "practice") {
        await loadPracticeActivity();
        return;
      }

      await loadTheoreticalPhase();
    }

    loadPhase();
  }, []);

  return (
    <>
      {isLoadingPhase === true ? (
        <Container>
          <ActivityIndicator size="large" color={theme.colors.blue} />
        </Container>
      ) : (
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.background}
          />

          {phase_type === "practice" ? (
            <Practical
              handleNextActivity={handleNextActivity}
              currentActivity={currentPracticeActivity}
            />
          ) : (
            <Theoretical
              id={theoreticalActivity.id}
              map_id={theoreticalActivity.map_id}
              title={theoreticalActivity.title}
              markdown_text={theoreticalActivity.markdown_text}
            />
          )}
        </>
      )}
    </>
  );
}
