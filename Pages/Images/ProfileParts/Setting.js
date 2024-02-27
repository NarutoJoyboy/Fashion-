import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"

export default function Setting() {
    const navigation = useNavigation();
    const Width = Dimensions.get('window').width;
    const list =[
        {image:require('../Profilecompimages/login.png'), id:1, name:'Notification Settings' },
        {image:require('../Profilecompimages/login.png'), id:2, name:'Password Manager' },
        {image:require('../Profilecompimages/login.png'), id:3, name:'Delete Account' },

    ]
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={[styles.profiletxt, {marginLeft:Width/4}]}>Profile</Text>
      </View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  button1: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
})