import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Dimensions, Animated  } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";

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
    <View>
      {isloading? <ActivityIndicator size="large" style={{height:Height}}/> :

        <FlatList
        data={dataitem}
        keyExtractor={item=>item.id}
      numColumns={2}
      renderItem={({item})=>(
        <Animated.View style={{borderWidth:1, elevation:1, shadowColor:'black', }}>

        <TouchableOpacity onPress={()=>navigation.navigate(Productdetails)}>

        <Animated.View style={styles.item}>
          <Image
            source={{uri:item.image}}
            style={styles.itemImage}
            
          />
          <View 
          style={styles.itemDetails}>
            <Text style={styles.itemName}>
              {item.title}
            </Text>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={15} color={'red'} />
              
            </View>
          </View>
          <Text style={styles.priceText}>{item.price}</Text>
        </Animated.View>
              </TouchableOpacity>

          <TouchableOpacity
            style={styles.likeButton}
            // onPress={() => Togglelike(item.id)}
            >
            <AntDesign
              name='heart'
              size={20}
              color={'#704F38'}
              
            />
          </TouchableOpacity>
    </Animated.View>
      )}
      
      />
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
    width:Width/2.3,
    height:Height/5.8,
},
likeButton:{
  position:'absolute',
  borderWidth:1,
  padding:10,
  borderRadius:20,
  backgroundColor:'white',
  right:10
}
})