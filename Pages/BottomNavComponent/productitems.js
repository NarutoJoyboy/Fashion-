import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Productdetails from './productdetails';


export default function Productitems() {

    const navigation = useNavigation();

    const Products = [
        {title:'Men', id:'1', image: require('../Images/1.jpg'), },
        {title:'Women', id:'2', image: require('../Images/1.jpg'), },
        {title:'Children', id:'3', image: require('../Images/1.jpg'), },
        {title:'Jacket', id:'4', image: require('../Images/1.jpg'), },
        {title:'Funcky', id:'5', image: require('../Images/1.jpg'), },
        {title:'Hoody', id:'6', image: require('../Images/1.jpg'), },
    ]

    return (
    <View style={styles.container}>
      {Products.map((item) =>{
        return(
            <View key={item.id} style={styles.box}>
                <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate(Productdetails)}> 
                <Image source={item.image} style={styles.img}/>
                <Text style={styles.txt}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    box:{
        margin:10,
    },
    img:{
        width:175,
        height:175,
        borderRadius:30,
    },
    txt:{
        color:'black',
        fontSize:20,
        textAlign:'center',

    },
    opacity:{
        opacity:1,
        
    }
})