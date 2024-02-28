import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"

export default function Setting() {
    const navigation = useNavigation();
    const Width = Dimensions.get('window').width;
    const list = [
        {image:require('../../Images/Profilecompimages/login.png'), id:1, name:'Notification Settings' },
        {image:require('../../Images/Profilecompimages/login.png'), id:2, name:'Password Manager' },
        {image:require('../../Images/Profilecompimages/login.png'), id:3, name:'Delete Account' },

    ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={[styles.profiletxt, {marginLeft:Width/4}]}>Settings</Text>
      </View>
      <ScrollView>
        {list.map((item)=>{
           return(
            <View key={item.id}>
              <TouchableOpacity  style={styles.listitem} >
              <View style={styles.iconslist}>
              <Image source={item.image} style={styles.icons}/>
              <Text style={styles.listitemtxt}>{item.name}</Text>
              </View>
              <AntDesign name='right' color={'black'} size={20}/>
              </TouchableOpacity>
              <View style={styles.line}/>
            </View>
          )
        })}
      </ScrollView>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:10
  },
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    marginBottom:50
    
  },
  button1: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  profiletxt:{
    fontSize:30,
    color:'black',
  },
  listitem:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    alignItems:'center',
    marginBottom:10,
  },
  listitemtxt:{
    color:'black',
    fontSize:20,
    paddingLeft:10,
  },
  iconslist:{
    flexDirection:'row',
    alignItems:'center'

  },
  line:{
    color:'grey',
    borderBottomWidth:0.2,
    marginBottom:20,
    
    
  },
  icons:{
    width:22,
    height:22,
    
  },
})