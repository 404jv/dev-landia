import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator, StatusBar } from "react-native";

import { useTheme } from "styled-components";
import { api } from "../../services/api";

import { Container } from "./styles";

import { Practical } from "./Practical";
import { Theoretical } from "./Theoretical";

interface IOption {
  name: string;
  type: string;
  hexadecimal_color: string;
}

interface TipsProps {
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
  title: string;
  markdown_text: string;
};

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { phase } = route.params as any;
  const phase_type = phase.type;

  function handleNextActivity(isUserAnswer: boolean): void {
    if (practiceActivities.length === 0) {
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

      // eslint-disable-next-line eqeqeq
      if (currentPracticeActivity != undefined) {
        setIsLoading(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          title={theoreticalActivity.title}
          markdown_text={theoreticalActivity.markdown_text}
        />
      )}
    </>
  );
}
