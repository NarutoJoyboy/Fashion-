import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from './Home';

export default function BottomNavigation() {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Cart' component={}/> 
        <Tab.Screen name='Wishlist' component={}/> 
        <Tab.Screen name='Profile' component={}/> 
    </Tab.Navigator>
  )
}