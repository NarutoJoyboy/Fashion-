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
import Icons from "react-native-vector-icons"

export default function BottomNavigation() {

    const Tab = createBottomTabNavigator();
    const [activecolor, setactivecolor] = useState('')

    const list =[
      {name:'Home', component:Home, id:1, icon : 'home', library:'SimpleLineIcons' },
      {name:'Cart', component:Cart, id:2, icon : 'handbag', library:'SimpleLineIcons' },
      {name:'Wishlist', component:Wishlist, id:3, icon : 'hearto', library:'AntDesign' },
      {name:'Profile', component:Profile, id:4, icon : 'account-circle-outline', library:'MaterialCommunityIcons' },
    ];

  return (
    <Tab.Navigator screenOptions={{
      headerShown:false, 
      tabBarStyle:styles.tabStyle,
      initialRouteName:"Home",
      tabBarActiveTintColor:'white',
      tabBarInactiveTintColor:'grey',
      tabBarShowLabel:false,
      tabStyle:styles.tabs

    }}>
      {
        list.map((item)=>{
          return(
            <Tab.Screen name={item.name} component={item.component} key={item.id}
            options={{
              tabBarIcon: () =>(
                <View style={{backgroundColor:'white', padding:18, borderRadius:30}}>
                  {item.library==='SimpleLineIcons' &&(
                    <SimpleLineIcons name={item.icon} color={activecolor==='2' ? 'white' : 'brown'} size={20}/>

                  )} 
                  {item.library==='AntDesign' &&(
                    <AntDesign name={item.icon} color={activecolor==='2' ? 'white' : 'brown'} size={20}/>

                  )}
                  {item.library==='MaterialCommunityIcons' &&(
                    <MaterialCommunityIcons name={item.icon} color={activecolor==='2' ? 'white' : 'brown'} size={20}/>

                  )}
                </View>
              )
            }}
            />
          )
        })
      }
        {/* <Tab.Screen name='Home' component={Home}
        
        options={{
          
          tabBarIcon: () =>(
              
              <SimpleLineIcons name='home' color={activecolor==='1' ? 'white' : 'grey'} size={20}/>
          ),
          
        }}
        /> */}
        {/* <Tab.Screen name='Cart' component={Cart}
        setactivecolor={'2'}
        options={{
          tabBarIcon: () =>(
            <View style={{backgroundColor:'white', padding:18, borderRadius:30}}>

              <SimpleLineIcons name='handbag' color={activecolor==='2' ? 'white' : 'brown'} size={20}/>
            </View>
            ),
            
            
        }}
        />  */}
        {/* <Tab.Screen name='Wishlist' component={Wishlist}
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
        />  */}
        
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