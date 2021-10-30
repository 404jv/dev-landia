
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components'
import theme from './src/Global/styles/theme';

import { StatusBar } from 'react-native';

import { Activity } from './src/pages/Activity/index';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (

    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor="#22282B" />
      <Activity />
    </ThemeProvider>
  );
}
