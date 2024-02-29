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

export default function WelcomePage() {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 50, marginHorizontal: 20}}>
        <Image
          source={require('./Images/image10.png')}
          style={[styles.image1, {width: width / 2.2}]}
        />
        <View>
          <Image
            source={require('./Images/image10.png')}
            style={[styles.image2, {width: width / 2.3,}]}
          />
          <Image
            source={require('./Images/image10.png')}
            style={[styles.image3, {width: width / 2.3,}]}
          />
        </View>
      </View>
      <View style={{alignSelf:'center'}}>
        <Text style={{fontSize: 30, color: 'black', textAlign: 'center', textAlign:'center',marginHorizontal:50, marginTop:40}}>
          The <Text style={{color: '#704F38'}}>Fashion App</Text> That Makes You
          Look Your Best
        </Text>
        <Text style={{textAlign: 'center', color:'grey', fontSize:17, marginHorizontal:60, marginTop:20}}>
          Lorem Ipsum dipsum tipsum lipsim kilof unsun fvsvnvksnv vmvkv vksnkf
          nvnvk fsnks
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate(OnboardingScreen)}>
          <Text style={styles.buttontxt1}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signinoption}>
        <Text style={styles.accountoption}>Alreasy have an Account? </Text>
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
    marginVertical: 30,
  },
  signinoption: {flexDirection: 'row', alignSelf: 'center'},
  signin: {
    fontSize: 18,
    color: '#704F38',
    textDecorationLine: 'underline',
  },
  accountoption: {fontSize: 18, color: 'black'},
  buttontxt1: {color: 'white', fontSize: 20, textAlign: 'center'},
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
