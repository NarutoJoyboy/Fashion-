import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function NewPassword() {
  return (
    <View>
      <View>
        <TouchableOpacity style={{margin: 20}}>
          <AntDesign name="arrowleft" color={'black'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginTop: 70, paddingBottom: 10}}>
        <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
          New Password
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: 'grey',
            textAlign: 'center',
            marginHorizontal: 70,
          }}>
          Your New Password must be different from previously used passwords.
        </Text>
      </View>
      <View>
        <Text>Password</Text>

        <View>
          <TextInput placeholder="**************" />
          <Feather name={'eye'} color={'black'} size={25} />
        </View>
        <Text>Confirm Password</Text>
        <View>
          <TextInput placeholder="**************" />
          <Feather name={'eye'} color={'black'} size={25} />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'brown',
          marginHorizontal: 30,
          borderRadius: 40,
          marginTop: 30,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 23,
            color: 'white',
            padding: 15,
          }}>
          Create New password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
