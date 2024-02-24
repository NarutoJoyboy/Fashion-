import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

export default function HomeCategory() {
  const [catlist, setcatlist] = useState([
    {icon: require('../Images/t-shirt.png'), name: 'T-shirt', id: '1'},
    {icon: require('../Images/jeans.png'), name: 'Pant', id: '2'},
    {icon: require('../Images/dress.png'), name: 'Dress', id: '3'},
    {icon: require('../Images/jacket.png'), name: 'Jacket', id: '4'},
  ]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        //   marginTop:20,
          alignItems:'center'
        }}>
        <Text style={{fontSize:22, color:'black', }}>Category</Text>
        <TouchableOpacity>
          <Text style={{fontSize:15, color:'brown', }}>Seel All</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal:30, marginVertical:10}}>
        {catlist.map(item => {
          return (
            <View key={item.id} style={{alignItems:'center'}}>
              <TouchableOpacity style={{borderRadius: 50, padding:15, backgroundColor:'#E4D2D2'}}>
                <Image source={item.icon} style={{width: 30, height: 30, tintColor:'brown',}} />
              </TouchableOpacity>
              <Text style={{fontSize:17, color:'black', marginTop:5}}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
