import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from './Home';
import Cart from './Cart';
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Wishlist from './Wishlist';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Profile from './Profile';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function BottomNavigation() {

    const Tab = createBottomTabNavigator();
    const [activecolor, setactivecolor] = useState('')

  return (
    <Tab.Navigator screenOptions={{
      headerShown:false, 
      tabBarStyle:styles.tabStyle,
      initialRouteName:"Home",
      tabBarActiveTintColor:'white',
      tabBarInactiveTintColor:'grey',
      tabBarShowLabel:false,

    }}>
        <Tab.Screen name='Home' component={Home}
        
        options={{
          
          tabBarIcon: () =>(
              
              <SimpleLineIcons name='home' color={activecolor==='1' ? 'white' : 'grey'} size={20}/>
          ),
          
        }}
        />
        <Tab.Screen name='Cart' component={Cart}
        setactivecolor={'2'}
        options={{
          tabBarIcon: () =>(
            <SimpleLineIcons name='handbag' color={activecolor==='2' ? 'white' : 'grey'} size={20}/>
            ),
            
            
        }}
        /> 
        <Tab.Screen name='Wishlist' component={Wishlist}
        options={{
          tabBarIcon:()=>(
            <AntDesign name='hearto' size={20} color={'grey'}/>
          )
        }}
        
        /> 
        <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon:()=>(
            <MaterialCommunityIcons name='account-circle-outline' size={25} color={'grey'}/>
          )
        }}
        /> 
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabStyle:{
    backgroundColor:'black',
    marginBottom:10,
    marginHorizontal:30,
    borderRadius:30,
    height:70,

    

  }
})