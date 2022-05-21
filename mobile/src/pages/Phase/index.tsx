/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, StatusBar } from "react-native";

import { useTheme } from "styled-components";
import { api } from "../../services/api";

import { Container } from "./styles";

import { Practical } from "./Practical";
import { Theoretical } from "./Theoretical";

interface IOption {
  id: string;
  name: string;
  type: string;
  hexadecimal_color: string;
}

interface TipsProps {
  id: string;
  name: string;
}

type PracticeActivity = {
  id: string;
  title: string;
  description: string;
  type: string;
  default_code: IOption[];
  activity_answer: IOption[];
  is_needed_tests: boolean;
  tips: TipsProps[];
  options: IOption[];
  order: number;
};

type TheoreticalActivity = {
  id: string;
  map_id: string;
  title: string;
  markdown_text: string;
};

type PhaseParams = {
  phase: {
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
  }
}

export function Phase(): JSX.Element {
  const [practiceActivities, setPracticeActivities] = useState<
    PracticeActivity[]
  >([]);
  const [currentPracticeActivity, setCurrentPracticeActivity] =
    useState<PracticeActivity>();

  const [theoreticalActivity, setTheoreticalActivity] = useState(
    {} as TheoreticalActivity
  );

  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(true);

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
    }

    if (isUserAnswer) {
      practiceActivities.shift();
    } else {
      const wrongActivity = practiceActivities.shift();
      practiceActivities.push(wrongActivity);
    }

    setCurrentPracticeActivity(practiceActivities[0]);
  }

  useEffect(() => {
    async function LoadPracticeActivity(): Promise<void> {
      const response = await api.get(`/game/practice-phase/${phase.id}`);
      setPracticeActivities(response.data);

      if (currentPracticeActivity === undefined) {
        setCurrentPracticeActivity(response.data[0]);
      }
    }

    if (phase_type === "practice") {
      if (load) {
        LoadPracticeActivity();
        setLoad(false);
      }

      if (currentPracticeActivity !== undefined) {
        setIsLoading(false);
      }
    }
  }, [currentPracticeActivity]);

  useEffect(() => {
    async function LoadTheoreticalActivity(): Promise<void> {
      try {
        const response = await api.get(`/game/theory-phase/${phase.id}`);
        setTheoreticalActivity(response.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }

    if (phase_type === "theory") {
      LoadTheoreticalActivity();
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      {isLoading && (
        <Container>
          <ActivityIndicator size="large" color={theme.colors.blue} />
        </Container>
      )}

      {!isLoading &&
        practiceActivities.length > 0 &&
        phase_type === "practice" && (
        <Practical
          handleNextActivity={handleNextActivity}
          currentActivity={currentPracticeActivity}
        />
      )}

      {!isLoading && phase_type === "theory" && (
        <Theoretical
          id={theoreticalActivity.id}
          map_id={theoreticalActivity.map_id}
          title={theoreticalActivity.title}
          markdown_text={theoreticalActivity.markdown_text}
        />
      )}
    </>
  );
}
