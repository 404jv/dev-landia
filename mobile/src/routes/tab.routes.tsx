import React from "react";
import { Platform } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { Perfil } from "../pages/Perfil";
import { CustomTabBarButton } from "./CustomTabBarButton";

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
          tabBarIcon: ({ size, color }) => (
            <Feather name="menu" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomTabBarButton name="book-open" size={40} color={color} />
          ),
          tabBarActiveTintColor: "#fff",
        }}
      />

      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
