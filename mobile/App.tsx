
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {
  JetBrainsMono_500Medium,
  JetBrainsMono_400Regular,
} from '@expo-google-fonts/jetbrains-mono';

import { ThemeProvider } from 'styled-components'
import theme from './src/Global/styles/theme';

import { StatusBar, LogBox } from 'react-native';

import { Activity } from './src/pages/Activity/index';
import { ClassArticle } from './src/pages/ClassArticle';

export default function App() {

  LogBox.ignoreLogs(['Warning: Failed prop type: Invalid props.style key `textDecoration` supplied to `Text`.']);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    JetBrainsMono_500Medium,
    JetBrainsMono_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (

    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.background} />
      <ClassArticle />
    </ThemeProvider>
  );
}
