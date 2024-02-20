import { View, Text } from 'react-native'
import React from 'react'

export default function NewPassword() {
  return (
    <View>
      <View>
            <TouchableOpacity style={{margin:20}}>
            <AntDesign name='arrowleft' color={'black'} size={30}/>

            </TouchableOpacity>
        </View>
      <View style={{alignSelf:'center', marginTop:70}}>
        <Text style={{fontSize:30, color:'black', textAlign:'center'}}>Verify Code</Text>
        <Text style={{fontSize:17, color:'grey', textAlign:'center'}}>Please enter the code just sent to email</Text>
        
        <Text style={{fontSize:17, color:'brown', textAlign:'center'}}>example@gmail.com</Text>
        
            
      </View>
    </View>
  )
}