import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import FAQ from './FAQ';
import Contactus from './Contactus';

export default function HelpTopTab() {

    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name='FAQ' component={FAQ}/>
        <Tab.Screen name='Contactus' component={Contactus}/>
    </Tab.Navigator>
  )
}