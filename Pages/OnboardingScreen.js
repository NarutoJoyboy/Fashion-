import {View, Text, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import Signin from './Signin';

export default function OnboardingScreen() {
    const navigation= useNavigation()
  return (
    <View style={{flex:1}}>
      <Onboarding 
      onSkip={()=>navigation.navigate(Signin)}
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
