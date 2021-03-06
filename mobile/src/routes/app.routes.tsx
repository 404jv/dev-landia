import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Achievements } from "../pages/Achievements";
import { Phase } from "../pages/Phase";
import { TabRoutes } from "./tab.routes";
import { Practical } from "../pages/Phase/Practical";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { FinishSignUp } from "../pages/FinishSignUp";
import { NextSignUp } from "../pages/NextSignUp";
import { useAuth } from "../hooks/auth";

const { Navigator, Screen, Group } = createStackNavigator();

export function AppRoutes(): JSX.Element {
  const { userData } = useAuth();

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      {userData != null ? (
        <Group>
          <Screen name="Home" component={TabRoutes} />
          <Screen name="Phase" component={Phase} />
          <Screen name="Practical" component={Practical} />
          <Screen name="Achievements" component={Achievements} />
        </Group>
      ) : (
        <Group>
          <Screen name="SignIn" component={SignIn} />
          <Screen name="SignUp" component={SignUp} />
          <Screen name="NextSignUp" component={NextSignUp} />
          <Screen name="FinishSignUp" component={FinishSignUp} />
        </Group>
      )}
    </Navigator>
  );
}
