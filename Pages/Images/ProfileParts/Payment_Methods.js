import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';

export default function PaymentMethods() {
  const navigation = useNavigation();
  const Width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={[styles.profiletxt, {marginLeft:Width/5}]}>Payment Methods</Text>
      </View>

      <View>
        <Text style={styles.txt1}>Credit & Debit Card</Text>
        <TouchableOpacity style={styles.Card}>
          <View style={styles.box}>
            <Image source={require('../Profilecompimages/credit-card.png')} style={styles.img}/>
            <Text style={styles.txt2}>Add New Card</Text>
          </View>
          <View>
            <Text style={styles.txt3}>Link</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.txt1}>More Payment Options</Text>
        <TouchableOpacity style={styles.Card}>
        <View style={styles.box}>
            <Image source={require('../Profilecompimages/smartphone.png')} style={styles.img}/>
            <Text style={styles.txt2}>UPI</Text>
          </View>
            <Text style={styles.txt3}>Link</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Card}>
        <View style={styles.box}>
            <Image source={require('../Profilecompimages/payment-method.png')} style={styles.img}/>
            <Text style={styles.txt2}>Cash On Delivery</Text>
          </View>
            <Text style={styles.txt3}>Link</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal:10,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  button1: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  profiletxt:{
    fontSize:25,
    color:'black',
  },
  txt1:{
    fontSize:25,
    color:'black',
    marginVertical:15

  },
  Card:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10,
    padding:10,
    alignItems:'center'

  },
  box:{
    flexDirection:'row',
    alignItems:'center'

  },
  img:{
    width:30,
    height:30,
    tintColor:'brown',
    // backgroundColor:'brown',
    // borderRadius:10
    
  },
  txt2:{
    color:'grey',
    fontSize:20,
    paddingLeft:10,

  },
  txt3:{
    color:'brown',

  }
  


})