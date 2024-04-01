import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Dimensions, Animated, TextInput  } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from "react-native-vector-icons/Octicons"

const Height= Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default function Product() {

    const [dataitem, setdataitem] = useState()
    const [isloading, setisloading] = useState(true)


    const DataFetch = async()=>{
        try{
          
            const data = await fetch("https://fakestoreapi.com/products")
            const result = await data.json()
            setdataitem(result)
            setisloading(false)

        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{

        DataFetch()
    },[]);
  return (
    <View style={{ alignSelf:'center'}}>
      
      {isloading? <ActivityIndicator size="large" style={{height:Height}}/> :

      <View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Octicons name="search" size={25} color={'black'} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.slidersButton}>
          <FontAwesome6 name="sliders" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      
        <FlatList
        data={dataitem}
        keyExtractor={item=>item.id}
      numColumns={2}
      renderItem={({item})=>(
        <Animated.View style={{ borderWidth:1,shadowColor:'grey', margin:10, borderRadius:10,  }}>

        <TouchableOpacity onPress={()=>navigation.navigate(Productdetails)}>

        <Animated.View style={styles.item}>
          <Image
            source={{uri:item.image}}
            style={styles.itemImage}
            
          />
          <View 
          style={styles.itemDetails}>
            <Text style={styles.itemName} numberOfLines={1}>
              {item.title}
            </Text>
            
          </View>
          <Text style={styles.priceText}>${item.price}</Text>
        </Animated.View>
              </TouchableOpacity>

          
    </Animated.View>
      )}
      
      />
    </View>
    }
    </View>
  )
}

const styles = StyleSheet.create({
item:{
    width:Width/2.3,
    height:Height/3.4
    
},
itemImage:{
    width:Width/2.6,
    height:Height/5.8,
    margin:10
},
itemDetails: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin:5,
},
itemName: {
  color: 'black',
  fontSize: 16,
  
},
priceText: {
  color: 'black',
  fontSize: 16,
  fontWeight:'bold', margin:5
},
searchContainer: {
  flexDirection: 'row',
  borderWidth: 1,
  borderRadius: 20,
  width: Width / 1.2,
  alignItems: 'center',
  paddingHorizontal: 15,
  marginTop:10
},
searchInput: {
  width: Width / 1.38,
  paddingHorizontal: 10,
},
slidersButton: {
  backgroundColor: '#704F38',
  alignSelf: 'center',
  padding: 10,
  borderRadius: 20,
  marginLeft: 5,
},
})