import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './Pages/StackScreens/WelcomePage';
import OnboardingScreen from './Pages/StackScreens/OnboardingScreen';
import Signin from './Pages/StackScreens/Signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateAccount from './Pages/StackScreens/CreateAcc';
import VerifyCode from './Pages/StackScreens/VerifyCode';
import NewPassword from './Pages/StackScreens/NewPassword';
import ProfileComplete from './Pages/StackScreens/ProfileComplete';
import Home from './Pages/BottomNavComponent/Homelist/Home';
import BottomNavigation from './Pages/BottomNavComponent/BottomNavigation';
import Productdetails from './Pages/BottomNavComponent/productdetails';
import EditProfile from './Pages/BottomNavComponent/ProfileParts/EditProfile';
import PaymentMethods from './Pages/BottomNavComponent/ProfileParts/Payment_Methods';
import Setting from './Pages/BottomNavComponent/ProfileParts/Setting';
import HelpCenter from './Pages/BottomNavComponent/ProfileParts/Help_Center';
import Products from './Pages/BottomNavComponent/Homelist/Products';

export default function App() {
  const Stack = createNativeStackNavigator();

  const MyTheme ={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      // primary:'black',
      background:'white',
    },
  };

  const MainScreens = () =>{
    return(
    <BottomNavigation/>
    )
  }

  

  return (
    <NavigationContainer theme={MyTheme} >
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
        <Stack.Screen name='HelpCenter' component={HelpCenter}/>
        <Stack.Screen name='Products' component={Products}/>
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
