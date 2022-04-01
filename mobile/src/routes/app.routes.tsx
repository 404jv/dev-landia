import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { Achievements } from "../pages/Achievements";
import { Activity } from "../pages/Activity";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen, Group } = createStackNavigator();

export function AppRoutes(): JSX.Element {
  const user = null;

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      {user != null ? (
        <Group>
          <Screen name="Home" component={TabRoutes} />
          <Screen name="Activity" component={Activity} />
          <Screen name="Achievements" component={Achievements} />
        </Group>
      ) : (
        <Group>
          <Screen name="SignIn" component={SignIn} />
        </Group>
      )}
    </Navigator>
  );
}
