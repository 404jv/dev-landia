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

import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from './src/pages/SignIn';
import { Home } from './src/pages/Home';
import { Achievements } from './src/pages/Achievements';
import { Activity } from './src/pages/Activity';
import { ClassArticle } from './src/pages/ClassArticle';
import { AppRoutes } from './src/routes/app.routes';


export default function App() {

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </ThemeProvider>
    );
}
