import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import Signin from './Signin';


export default function OnboardingScreen() {
    const navigation= useNavigation()
    const Skip = () =>{
        return(
            
            <TouchableOpacity>
                <Text></Text>
            </TouchableOpacity>
        )
    }
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
        
        <TouchableOpacity style={{flexDirection:'row-reverse',}} onPress={()=>navigation.navigate(Signin)}>
        <Text style={{ color:'white', fontSize:20, paddingRight:30, paddingTop:20 }}>Skip</Text>

        </TouchableOpacity>
        
      <Onboarding 
      onSkip={()=>navigation.navigate(Signin)}
      onDone={()=>navigation.navigate(Signin)}

      SkipButtonComponent={Skip}
        pages={[
          {
            backgroundColor: 'black',
            image: <Image source={require('./Images/image10.png')} style={{width:100, height:300}}/>,
            title: 'Welcome',
            subtitle: 'my name is Anthony gonsarvis',
          },
          {
            backgroundColor: 'black',
            image: <Image source={require('./Images/image10.png')}/>,
            title: 'Welcome',
            subtitle: 'my name is Anthony gonsarvis',
          },
          {
            backgroundColor: 'black',
            image: <Image source={require('./Images/image10.png')}/>,
            title: 'Welcome',
            subtitle: 'my name is Anthony gonsarvis',
          },
        ]}
      />
    </View>
  );
}
