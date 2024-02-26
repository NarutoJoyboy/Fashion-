import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Setting() {
    const navigation = useNavigation();
    const list =[
        {image:require('../Profilecompimages/'), id:1, title:'Notification Settings'},
        {image:require('../Profilecompimages/'), id:1, title:'Password Manager'},
        {image:require('../Profilecompimages/'), id:1, title:'Delete Account'},

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