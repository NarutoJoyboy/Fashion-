import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomePage from './Pages/WelcomePage';
import OnboardingScreen from './Pages/OnboardingScreen';
import Signin from './Pages/Signin';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={WelcomePage}/>
        <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
        <Stack.Screen name='Signin' component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}