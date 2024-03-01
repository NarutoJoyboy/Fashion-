import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Contactus() {

    const list =  [
        {name:'Customer Service', id:1, icon:'customerservice', communityicon:'AntDesign'  },
        {name:'Whatsapp No.', id:2, communityicon:'FontAwesome6Brands' , icon:'whatsapp'},
        {name:'Website', id:3, communityicon:'MaterialCommunityIcons', icon:'web' },
        {name:'Facebook', id:4, communityicon:'AntDesign', icon:'facebook-square' },
        {name:'Twitter', id:5, icon:'x-twitter', communityicon:'FontAwesome6Brands'},
        {name:'Instagram', id:6, icon:'instagram', communityicon:'AntDesign' },
    ]
  return (
    <View>
      <FlatList
      data={list}
      keyExtractor={item=>item.id}
      renderItem={(item)=>(
        <View key={item.id}>
            {
                
            }
            <Text>{item.name}</Text>
            <AntDesign name='down' color={'black'} size={25}/>
            
        </View>
      )}
      />
    </View>
  )
}