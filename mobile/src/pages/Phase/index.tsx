import React, { useEffect, useState } from "react";

import { useTheme } from "styled-components";
import { ActivityIndicator, StatusBar } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Text } from "./styles";

import { Practical } from "./Practical";
import { api } from "../../services/api";

interface IOption {
  name: string;
  type: string;
  hexadecimal_color: string;
}

type Activity = {
  id: string;
  title: string;
  description: string;
  type: string;
  default_code: IOption[];
  activity_answer: IOption[];
  is_needed_tests: boolean;
  tips: string[];
  options: IOption[];
  order: number;
};

export function Phase(): JSX.Element {
  const navigation = useNavigation<any>();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivity, setCurrentActivity] = useState<Activity>();
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(true);

  const theme = useTheme();
  const route = useRoute();

  const { phase } = route.params as any;

  function handleNextActivity(isUserAnswer: boolean): void {
    if (activities.length === 0) {
      return;
    }

    if (isUserAnswer) {
      activities.shift();
    } else {
      const wrongActivity = activities.shift();
      activities.push(wrongActivity);
    }

    setCurrentActivity(activities[0]);
  }

  useEffect(() => {
    async function LoadActivity(): Promise<void> {
      const response = await api.get(`/game/practice-phase/${phase.id}`);

      setActivities(response.data);

      if (currentActivity === undefined) {
        setCurrentActivity(response.data[0]);
      }
    }

    if (load) {
      LoadActivity();
      setLoad(false);
    }

    if (currentActivity != undefined) {
      setIsLoading(false);
    }
  }, [currentActivity]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      {!isLoading && activities.length > 0 ? (
        <Practical
          handleNextActivity={handleNextActivity}
          currentActivity={currentActivity}
        />
      ) : (
        <Container>
          <ActivityIndicator size="large" color={theme.colors.blue} />
        </Container>
      )}
    </>
  );
}
