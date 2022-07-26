import React from "react";
import { LogBox } from "react-native";

import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import theme from "./src/Global/styles/theme";

import { AuthProvider } from "./src/hooks/auth";

import { AppRoutes } from "./src/routes/app.routes";
import useCachedResources from "./src/hooks/useCachedResources";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <TailwindProvider>
        <NavigationContainer>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </NavigationContainer>
      </TailwindProvider>
    </ThemeProvider>
  );
}
