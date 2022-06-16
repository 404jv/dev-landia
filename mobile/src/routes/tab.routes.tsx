import React from "react";
import { Platform, Image } from "react-native";

import { useTheme } from "styled-components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { Perfil } from "../pages/Perfil";

import profileActive from "../assets/sunglasses.png";
import profileInactive from "../assets/sunglasses-black.png";
import homeInactive from "../assets/pixel-black.png";
import homeActive from "../assets/pixel.png";
import trophyInactive from "../assets/menu-trophy-black.png";
import trophyActive from "../assets/menu-trophy.png";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes(): JSX.Element {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopWidth: 0,
          height: 55,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="WIP"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) =>
            color === "#FFFFFF" ? (
              <Image
                style={{
                  width: size + 6,
                  height: size + 6,
                }}
                source={trophyInactive}
              />
            ) : (
              <Image
                style={{
                  width: size + 6,
                  height: size + 6,
                }}
                source={trophyActive}
              />
            ),
        }}
      />

      <Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) =>
            color === "#FFFFFF" ? (
              <Image
                style={{
                  width: size + 8,
                  height: size + 8,
                }}
                source={homeInactive}
              />
            ) : (
              <Image
                style={{
                  width: size + 8,
                  height: size + 8,
                }}
                source={homeActive}
              />
            ),
        }}
      />

      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) =>
            color === "#FFFFFF" ? (
              <Image
                style={{
                  width: size + 8,
                  height: size + 8,
                }}
                source={profileInactive}
              />
            ) : (
              <Image
                style={{
                  width: size + 8,
                  height: size + 8,
                }}
                source={profileActive}
              />
            ),
        }}
      />
    </Navigator>
  );
}
