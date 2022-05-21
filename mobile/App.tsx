import React from "react";

import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/auth";
import theme from "./src/Global/styles/theme";

import { AppRoutes } from "./src/routes/app.routes";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
