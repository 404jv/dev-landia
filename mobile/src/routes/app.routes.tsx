import React, { useEffect } from 'react';
import { Platform} from 'react-native';

import {Feather } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';
import { Activity } from './../pages/Activity/index';
import { CustomTabBarButton } from '../components/CustomTabBarButton';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();




function BottomTabBarHome(){


    return(
        <Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#45A7AD',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#1C2124',
                    borderTopWidth: 0,
                    height: 55,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        
                },
            }}
        >
    
            <Screen 
                name="Nada" 
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => <Feather name="menu" color={color} size={size}/>),
                    
                }}
                
            />
    
            <Screen 
                name="HomeScreen" 
                component={Home}
                options={{
                    tabBarIcon: (({color}) => <CustomTabBarButton name="book-open" size={40} color={color}/>),
                    tabBarActiveTintColor: '#fff',                
                }}
            />
        
            <Screen 
                name="Perfil" 
                component={Perfil}
                options={{
                    tabBarIcon: (({size, color}) => <Feather name="user" color={color} size={size}/>),
                }}
            />
    
        </Navigator>
    )
}


export function AppRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen name='Home' component={BottomTabBarHome}/>
            <Stack.Screen name='Activity' component={Activity}/>
        </Stack.Navigator>
    )
}