import {View, Text, FlatList, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Contactus() {
  const list = [
    {
      name: 'Customer Service',
      id: 1,
      icon: 'customerservice',
      communityicon: 'AntDesign',
      press: false,
      contact:'123456789',
      link:'x',
    },
    {
      name: 'Whatsapp No.',
      id: 2,
      communityicon: 'FontAwesome',
      icon: 'whatsapp',
      press: false,
      contact:'+918739958022',
      link:'x',
    },
    {
      name: 'Website',
      id: 3,
      communityicon: 'MaterialCommunityIcons',
      icon: 'web',
      press: false,
      contact:'myfashion.com',
      link:'x',
    },
    {
      name: 'Facebook',
      id: 4,
      communityicon: 'AntDesign',
      icon: 'facebook-square',
      press: false,
      contact:'premprajapat',
      link:'x',
    },
    {
      name: 'Twitter',
      id: 5,
      icon: 'twitter',
      communityicon: 'FontAwesome',
      press: false,
      contact:'prempp',
      link:'x',
    },
    {
      name: 'Instagram',
      id: 6,
      icon: 'instagram',
      communityicon: 'AntDesign',
      press: false,
      contact:'__prem._02',
      link:Linking.openURL('https://www.youtube.com/'),
      
    },
  ];
    const [show, setshow] = useState({});

    const Toggleshow =(itemId)=>{
      setshow(prevshow=>({
        ...prevshow,
        [itemId]:!prevshow[itemId],
      }))
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{
              margin: 10,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 20,
              borderColor: 'grey',
              
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={()=>Toggleshow(item.id)}
              >
              <View style={{flexDirection: 'row'}}>
                {item.communityicon === 'AntDesign' && (
                  <AntDesign name={item.icon} size={25} color={'black'} />
                )}
                {item.communityicon === 'FontAwesome' && (
                  <FontAwesome name={item.icon} size={25} color={'black'} />
                )}
                {item.communityicon === 'MaterialCommunityIcons' && (
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={25}
                    color={'black'}
                  />
                )}
                <Text style={{color: 'black', fontSize: 17, paddingLeft: 10}}>
                  {item.name}
                </Text>
              </View>
              <AntDesign name="down" color={'black'} size={20} />
            </TouchableOpacity>

            { show[item.id] && (
              <View>
                <View
                  style={{
                    borderWidth: 0.2,
                    borderColor: 'grey',
                    marginHorizontal: 10,
                    marginTop: 20,
                  }}
                />
                <TouchableOpacity
                  style={{alignItems: 'center', flexDirection: 'row'}}
                  onPress={()=>item.link}
                  >
                  <Text
                    style={{
                      marginHorizontal: 15,
                      marginVertical: 10,
                      color: 'grey',
                    }}>
                    {item.contact}
                  </Text>
                </TouchableOpacity>
              </View>
   ) }
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
  },
});
