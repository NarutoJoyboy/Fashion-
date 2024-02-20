import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import NewPassword from './NewPassword';

export default function VerifyCode() {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <TouchableOpacity style={{margin: 20}}>
          <AntDesign name="arrowleft" color={'black'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginTop: 70}}>
        <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
          Verify Code
        </Text>
        <Text style={{fontSize: 17, color: 'grey', textAlign: 'center'}}>
          Please enter the code just sent to email
        </Text>

        <Text style={{fontSize: 17, color: 'brown', textAlign: 'center'}}>
          example@gmail.com
        </Text>
      </View>
      <View style={{marginTop: 50, marginHorizontal: 70}}>
        <TextInput
          placeholder="OTP"
          style={{
            borderWidth: 1,
            borderRadius: 20,
            textAlign: 'center',
            fontSize: 20,
          }}
        />
      </View>
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <Text style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
          Didn't receive code?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'brown',
              fontSize: 16,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            Resend code
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'brown',
          marginHorizontal: 30,
          borderRadius: 40,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate(NewPassword)}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 23,
            color: 'white',
            padding: 15,
          }}
          >
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
}
