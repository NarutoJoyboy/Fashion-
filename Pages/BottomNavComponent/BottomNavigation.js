import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from './Homelist/Home';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Profile from './Profile';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function BottomNavigation() {

    const Tab = createBottomTabNavigator();
    const [activecolor, setactivecolor] = useState('')

    const list =[
      {name:'Home', component:Home, id:1, icon : 'home', library:'SimpleLineIcons' },
      {name:'Cart', component:Cart, id:2, icon : 'handbag', library:'SimpleLineIcons' },
      {name:'Wishlist', component:Wishlist, id:3, icon : 'hearto', library:'AntDesign' },
      {name:'Profile', component:Profile, id:4, icon : require('../Images/Profilecompimages/user_big.png'), library:'MaterialCommunityIcons' },
    ];

  return (
    <Tab.Navigator screenOptions={{
      headerShown:false, 
      tabBarStyle:styles.tabStyle,
      initialRouteName:"Home",
      tabBarActiveColor:'white',
      tabBarInactiveColor:'grey',
      tabBarShowLabel:false,
      tabStyle:styles.tabs,
      tabBarActiveBackgroundColor: 'red',
      

    }}>
      {
        list.map((item)=>{
          return(
            <Tab.Screen name={item.name} component={item.component} key={item.id}
            options={{
              tabBarIcon: () =>(
                <View style={{backgroundColor:'white', padding:18, borderRadius:30}}>
                  {item.library==='SimpleLineIcons' &&(
                    <SimpleLineIcons name={item.icon} color={activecolor==='2' ? 'white' : '#704F38'} size={20}/>

                  )} 
                  {item.library==='AntDesign' &&(
                    <AntDesign name={item.icon} color={activecolor==='2' ? 'white' : '#704F38'} size={20}/>

                  )}
                  {item.library==='MaterialCommunityIcons' &&(
                    <Image source={item.icon} style={{width:20, height:20,
                    tintColor:'#704F38', padding:10}}/>

                  )}
                </View>
              ),
              
            }}
            />
          )
        })
      } 
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
    
    
    

  },
  tabs:{
    backgroundColor:'white'
  }
})