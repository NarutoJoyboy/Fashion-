import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './Pages/WelcomePage';
import OnboardingScreen from './Pages/OnboardingScreen';
import Signin from './Pages/Signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateAccount from './Pages/CreateAcc';
import VerifyCode from './Pages/VerifyCode';
import NewPassword from './Pages/NewPassword';
import ProfileComplete from './Pages/ProfileComplete';

export default function App() {
  const Stack = createNativeStackNavigator();

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name='CreateAccount' component={CreateAccount}/>
        <Stack.Screen name='VerifyCode' component={VerifyCode}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
        <Stack.Screen name='ProfileComplete' component={ProfileComplete}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
