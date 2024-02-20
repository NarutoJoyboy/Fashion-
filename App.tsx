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

export default function App() {
  const Stack = createNativeStackNavigator();

  const [firstlaunch, setfirstlaunch] = useState(null);

  // useEffect(() => {
  //   async function setData() {
  //     const appData = await AsyncStorage.getItem('applaunched');
  //     if (appData === null) {
  //       setfirstlaunch(true);
  //       AsyncStorage.setItem('applaunched', 'false');
  //     } else {
  //       setfirstlaunch(false);
  //     }
  //   }
  //   setData();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name='CreateAccount' component={CreateAccount}/>
        <Stack.Screen name='VerifyCode' component={VerifyCode}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
