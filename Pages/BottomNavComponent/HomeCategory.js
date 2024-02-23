import { View, Text, FlatList, TouchableOpacity, Image  } from 'react-native'
import React, { useState } from 'react'


export default function HomeCategory() {

    const [catlist, setcatlist]= useState([
        {icon: require('../Images/google-logo.png'), name:'Tshirt', id:'1'},
        {icon: require('../Images/google-logo.png'), name:'Pant', id:'2'},
        {icon: require('../Images/google-logo.png'), name:'Dress', id:'3'},
        {icon: require('../Images/google-logo.png'), name:'Jacket', id:'4'},
    ])
   return (
    <View>
      <View>
        <Text>Category</Text>
        <Text>Seel All</Text>
      </View>
      <View>
        <FlatList 
        data={catlist}
        keyExtractor={(item)=>item.id}
        renderItem={(item)=>(
            <View key={item.id}>
                <TouchableOpacity>
                    <Image source={item.icon}/>
                </TouchableOpacity>
                <Text>{item.name}</Text>
            </View>
        )}
        />
      </View>
    </View>
  )
}