import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';

export default function HelpCenter() {
  const Width = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={[styles.profiletxt, {marginLeft:Width/3}]}>Help</Text>
      </View>
      <View>
        <AntDesign name='search' color={'black'} size={25}/>
        <TextInput
        placeholder='Search'
        placeholderTextColor={'grey'}
        style={styles.search}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
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
})