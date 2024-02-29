import {View, Text, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import ProfileComplete from './ProfileComplete';

export default function NewPassword() {
  const navigation = useNavigation();

  const Width = Dimensions.get('window').width;
  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            margin: 20,
            borderWidth: 1,
            alignSelf: 'flex-start',
            borderRadius: 25,
          }}
          onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            color={'black'}
            size={30}
            style={{padding: 8}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          paddingBottom: 10,
          marginBottom: 30,
        }}>
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
      <View style={{margin: 20,}}>
        <Text style={{color:'black', fontSize:19, paddingBottom:5}}>Password</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom:20,
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder="**************"
            placeholderTextColor={'grey'}
            style={{fontSize: 18, color: 'black', width:Width/1.3, }}
          />
          <TouchableOpacity style={{alignSelf: 'center'}}>
          <Feather
            name={'eye-off'}
            color={'black'}
            size={25}
            
          />
          </TouchableOpacity>
        </View>
        <Text style={{color:'black', fontSize:19,paddingBottom:5}}>Confirm Password</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
           
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder="**************"
            placeholderTextColor={'grey'}
            style={{fontSize: 18, color: 'black', width:Width/1.3, }}
          />
          <TouchableOpacity style={{alignSelf: 'center'}}>
          <Feather
            name={'eye-off'}
            color={'black'}
            size={25}
            
          />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#704F38',
          marginHorizontal: 30,
          borderRadius: 40,
          marginTop: 30,
        }}
        onPress={()=>navigation.navigate(ProfileComplete)}
        >
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
