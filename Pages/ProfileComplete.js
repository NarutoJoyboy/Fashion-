import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

export default function ProfileComplete() {
  return (
    <View>
      <View>
        <Text>Complete your profile</Text>
      </View>
      <View>
        <Image source={require('./Images/image10.png')} style={{width:50, height:50}}/>
      </View>
    </View>
  )
}