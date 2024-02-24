import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';

export default function Productdetails() {

    const navigation = useNavigation();

    const Width = Dimensions.get('window').width;
    const Height = Dimensions.get('window').height;
    

    const Photos = [
        {image: require('../Images/4.png'), id:'1'},
        {image: require('../Images/4.png'), id:'2'},
        {image: require('../Images/4.png'), id:'3'},
        {image: require('../Images/4.png'), id:'4'},
        {image: require('../Images/4.png'), id:'5'},

    ];

    const SizeList = [
        {name:"S", id:1},
        {name:"M", id:2},
        {name:"L", id:3},
        {name:"XL", id:4},
        {name:"XXL", id:5},
    ]
 
  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.goBack()}>
        <AntDesign name='arrowleft' size={23} color={'black'}/>
        </TouchableOpacity>
        <Text style={styles.prodtext}>Product Details</Text>
        <TouchableOpacity style={styles.button1}>
            <AntDesign name='hearto' size={23} color={'black'}/>
        </TouchableOpacity>
      </View>

    <View>
        <Carousel
        width={Width}
        height={Height/2}
        style={{borderWidth:1}}
        data={Photos}
        renderItem={({item})=>{
            return(
                <View key={item.id}>
                    <Image source={item.image} style={[styles.img, {width:'100%', height:Height/2}]}/>
                </View>
            )
        }}
        />
    </View>
    <View style={styles.productdetails}>
        <View>
        <Text>Person's Style</Text>
        <View>
        <Text>5</Text>
        <AntDesign name='staro' size={25} color={'yellow'}/>
        </View>
        </View>
        <View>
            <Text>Product Name</Text>
        </View>
        <View>
            <Text>Product Details</Text>
            <Text>Product's data like what are they and their type quality and vbs heb kshsb vsjjhvbj bjhsb b jhb j j j jsjs vj sj j sd sj  s sbjhsbhbfhbs </Text>
            <View style={styles.divider}/>
        </View>
        <View>
            <Text>Select Size</Text>
            {SizeList.map((item)=>{
                return(
                    <View>
                        
                    </View>
                )
            })}
        </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        alignItems:'center',
        borderWidth:1,

    },
    button1:{
        borderWidth:1,
        padding:10,
        borderRadius:30
    },
    prodtext:{
        color:'black',
        fontSize:25,

    },
    img:{
        
    },
    productdetails:{
        margin:10
    },
    divider:{
        borderWidth:0.2,
        marginTop:30,
        borderColor:'grey',

    }

})