import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Homelist/Home';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Profile from './Profile';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BottomNavigation=()=> {
  const Tab = createBottomTabNavigator();
  
  const list = [
    {
      name: 'Home',
      component: Home,
      id: 1,
      icon: 'home',
      library: 'SimpleLineIcons',
      onActive:false
    },
    {
      name: 'Cart',
      component: Cart,
      id: 2,
      icon: 'handbag',
      library: 'SimpleLineIcons',
      onActive:false
    },
    {
      name: 'Wishlist',
      component: Wishlist,
      id: 3,
      icon: 'hearto',
      library: 'AntDesign',
      onActive:false
    },
    {
      name: 'Profile',
      component: Profile,
      id: 4,
      icon: require('../Images/Profilecompimages/user_big.png'),
      library: 'MaterialCommunityIcons',
      onActive:false
      
    },
    
  ];
  

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          bottom:5,
          left:10,
          right:10,
          borderRadius:50,
          height:70,
          backgroundColor:'black',
          
        },
        headerShown:false,

      }}
      
      >
      {list.map(item => {
        return (
          <Tab.Screen
            name={item.name}
            component={item.component}
            key={item.id}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                
                  style={[
                    focused? styles.Activebackcolor: null
                  ]}
                  
                  >
                  {item.library === 'SimpleLineIcons' && (
                    <SimpleLineIcons
                      name={item.icon}
                      color={!focused ? 'white' : '#704F38'}
                      size={25}
                    />
                  )}
                  {item.library === 'AntDesign' && (
                    <AntDesign
                      name={item.icon}
                      color={!focused ? 'white' : '#704F38'}
                      size={25}
                    />
                  )}
                  {item.library === 'MaterialCommunityIcons' && (
                    <Image
                      source={item.icon}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor:!focused ? 'white' : '#704F38',
                        padding: 10,
                      }}
                    />
                  )}
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default function MainScreens(){
  return(
  <BottomNavigation/>
  )
}

const styles = StyleSheet.create({
  Activebackcolor:{
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
  }
});
