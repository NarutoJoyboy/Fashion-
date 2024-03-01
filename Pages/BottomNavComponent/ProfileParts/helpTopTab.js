import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"

export default function HelpTopTab() {

    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name='FAQ' component={FAQ}/>
        <Tab.Screen name='Contact us' component={Contactus}/>
    </Tab.Navigator>
  )
}