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
import Home from './Pages/BottomNavComponent/Home';
import BottomNavigation from './Pages/BottomNavComponent/BottomNavigation';
import Productdetails from './Pages/BottomNavComponent/productdetails';
import EditProfile from './Pages/Images/ProfileParts/EditProfile';
import PaymentMethods from './Pages/Images/ProfileParts/Payment_Methods';
import Setting from './Pages/Images/ProfileParts/Setting';

export default function App() {
  const Stack = createNativeStackNavigator();

  const MainScreens = () =>{
    return(
    <BottomNavigation/>
    )
  }

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name='CreateAccount' component={CreateAccount}/>
        <Stack.Screen name='VerifyCode' component={VerifyCode}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
        <Stack.Screen name='ProfileComplete' component={ProfileComplete}/> */}
        <Stack.Screen name='MainScreens' component={MainScreens}/>
        <Stack.Screen name='Productdetails' component={Productdetails}/>
        <Stack.Screen name='EditProile' component={EditProfile}/>
        <Stack.Screen name='PaymentMethods' component={PaymentMethods}/>
        <Stack.Screen name='Setting' component={Setting}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
