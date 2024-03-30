import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import OnboardingScreen from './OnboardingScreen';
import {useNavigation} from '@react-navigation/native';
import Signin from './Signin';
import CreateAccount from './CreateAcc';

export default function WelcomePage() {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row', marginTop: 50, marginHorizontal: 20}}>
        <Image
          source={require('../Images/catlisticons/image10.png')}
          style={[styles.image1, {width: width / 2.2}]}
        />
        <View >
          <Image
            source={require('../Images/catlisticons/image10.png')}
            style={[styles.image2, {width: width / 2.3,}]}
          />
          <Image
            source={require('../Images/catlisticons/image10.png')}
            style={[styles.image3, {width: width / 2.3,}]}
          />
        </View>
      </View>
      <View style={{alignSelf:'center',}}>
        <Text style={{fontSize: 22, color: 'black', textAlign: 'center', textAlign:'center',marginHorizontal:50, marginTop:40}}>
          The <Text style={{color: '#704F38'}}>Fashion App </Text>That Makes You
          Look Your Best
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button1}
          // onPress={() => navigation.navigate(OnboardingScreen)}
          onPress={()=>navigation.navigate(CreateAccount)}
          >
          <Text style={styles.buttontxt1}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signinoption}>
        <Text style={styles.accountoption}>Already have an Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(Signin)}>
          <Text style={styles.signin}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: '#704F38',
    margin: 20,
    borderRadius: 20,
    padding: 10,
    marginVertical: 50,
  },
  signinoption: {flexDirection: 'row', alignSelf: 'center'},
  signin: {
    fontSize: 15,
    color: '#704F38',
    textDecorationLine: 'underline',
  },
  accountoption: {fontSize: 15, color: 'black'},
  buttontxt1: {color: 'white', fontSize: 18, textAlign: 'center'},
  image1: {height: 440, borderRadius: 80, marginRight: 10},
  image2: {
    height: 250,
    marginBottom: 10,
    borderRadius: 100,
  },
  image3:{
    height: 170,
    borderRadius: 100,
    alignSelf: 'center',
  }
});
