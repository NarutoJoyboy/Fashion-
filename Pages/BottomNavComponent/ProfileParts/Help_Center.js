import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import HelpTopTab from './helpTopTab';

export default function HelpCenter() {
  const Width = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={[styles.profiletxt, {marginLeft:Width/3}]}>Help</Text>
      </View>
      <View style={styles.search}>
        <AntDesign name='search1' color={'black'} size={25}/>
        <TextInput
        placeholder='Search'
        placeholderTextColor={'grey'}
        style={[styles.searchinput, {width:Width/1.19, paddingLeft:10,marginLeft:10}]}
        />
      </View>
      <View style={{flex:1}}>
        <HelpTopTab/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    margin:10
  },
  button1: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 30,
  },
  profiletxt:{
    fontSize:22,
    color:'black',
  },
  container:{
    flex:1,
  },
  search:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderRadius:20,
    margin:10,
    paddingHorizontal:10
    
  }
})