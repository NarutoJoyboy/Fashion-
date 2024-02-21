import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import CreateAccount from './CreateAcc';
import AntDesign from "react-native-vector-icons/AntDesign"

export default function OnboardingScreen() {
    const navigation= useNavigation()
    const Skip = () =>{
        return(
            
            <TouchableOpacity>
                <Text></Text>
            </TouchableOpacity>
        )
    };

    const Next = () =>{
      return(
          
        <View >
          <TouchableOpacity style={{backgroundColor:'brown', borderRadius:30, padding:10, marginHorizontal:20}} >
              <AntDesign name='arrowright' color={'white'} size={25}/>
          </TouchableOpacity>
          </View>
      )
  };


  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        
        <TouchableOpacity style={{flexDirection:'row-reverse',}} onPress={()=>navigation.navigate(CreateAccount)}>
        <Text style={{ color:'black', fontSize:20, paddingRight:30, paddingTop:20 }}>Skip</Text>

        </TouchableOpacity>
        
      <Onboarding 
      onSkip={()=>navigation.navigate(CreateAccount)}
      onDone={()=>navigation.navigate(CreateAccount)}

      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
        pages={[
          {
            backgroundColor: 'white',
            image: <Image source={require('./Images/image10.png')} style={{width:100, height:300}}/>,
            title: 'Welcome',
            subtitle: 'my name is Anthony gonsarvis',
          },
          {
            backgroundColor: 'white',
            image: <Image source={require('./Images/image10.png')}/>,
            title: 'Welcome',
            subtitle: 'my name is Anthony gonsarvis',
          },
          {
            backgroundColor: 'white',
            image: <Image source={require('./Images/image10.png')}/>,
            title: 'Welcome',
            subtitle: 'my name is Anthony gonsarvis',
          },
        ]}
      />
    </View>
  );
}
