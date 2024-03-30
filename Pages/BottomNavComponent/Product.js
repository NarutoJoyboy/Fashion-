import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";


export default function Product() {

    const [dataitem, setdataitem] = useState()
    const DataFetch = async()=>{
        try{
            const data = await fetch("https://fakestoreapi.com/products")
            const result = await data.json()
            setdataitem(result)

        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        DataFetch()
    },[]);
  return (
    <View>
      
      <FlatList
      data={dataitem}
      keyExtractor={item=>item.id}
      numColumns={2}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate(Productdetails)}>

        <View style={styles.item}>
          <Image
            source={{uri:item.image}}
            style={styles.itemImage}
            // style={{width:100, height:100}}
          />
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
          <View 
          style={styles.itemDetails}>
            <Text style={styles.itemName}>
              {item.title}
            </Text>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={15} color={'red'} />
              {/* <Text style={styles.ratingText}>
                {item.rating}
              </Text> */}
            </View>
          </View>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
              </TouchableOpacity>
      )}

      />
    </View>
  )
}

const styles = StyleSheet.create({
item:{
    width:200,
    height:300,
},
itemImage:{
    width:200,
    height:200,
}
})