import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import CreateAccount from './CreateAcc';


export default function Signin({navigation}) {

  const Width = Dimensions.get('window').width;

  const [Vieww, setVieww] = useState(false);

  const [emailEnter, setemailEnter] = useState('');
  const [PasswordEnter, setpasswordEnter] = useState('');

  const [emailValid, setemailvalid] = useState(false);

  const [passwordValid, setpasswordValid] = useState(false);

  // const emailEnteryCheck = text => {
  //   setemailEnter(text);

  //   setemailvalid(text.endsWith('@gmail.com'));
  // };

  // const passwordEntryCheck = text => {
  //   setpasswordEnter(text);

  //   setpasswordValid(text.length === 10);
  // };

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contain4}>
        <Text style={styles.txt}>Sign In</Text>
        <Text style={styles.txt1}>Hi! Welcome back, you've been missed</Text>
      </View>

      <View>
        <Text style={styles.txt2}>Email</Text>
        <TextInput
          placeholder="example@gmail.com"
          style={(styles.txt, styles.input)}
          placeholderTextColor={'grey'}
          value={emailEnter}
          // onChangeText={emailEnteryCheck}
        />
        <Text style={styles.txt2}>Password</Text>

        <View style={styles.contain}>
          <TextInput
            secureTextEntry={!Vieww}
            placeholder="***********"
            style={[styles.input, {width:Width/1.3, }]} 
            placeholderTextColor={'grey'}
            value={PasswordEnter}
            // onChangeText={passwordEntryCheck}
            maxLength={10}
          />

          <TouchableWithoutFeedback onPress={() => setVieww(!Vieww)}>
            <Feather
              name={Vieww ? 'eye' : 'eye-off'}
              color={'black'}
              size={25}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
        <TouchableOpacity>
          <Text style={styles.txt3}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => signinWithUser()}>
          <Text style={styles.txt4}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contain1}>
        <Text style={styles.txt5}> </Text>
        <Text style={styles.txt1}> Or sign in with </Text>
        <Text style={styles.txt5}> </Text>
      </View>

      <View style={styles.contain2}>
        <TouchableOpacity style={styles.apple}>
          <FontAwesome name="apple" color={'black'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.apple}>
          <FontAwesome name="google" color={'black'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.apple}>
          <FontAwesome name="facebook" color={'#17A9FD'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.contain3}>
        <Text style={styles.txt6}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(CreateAccount)}>
          <Text style={styles.txt7}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  contain4: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  txt: {
    color: 'black',
    fontSize: 35,
    marginBottom: 10,
  },
  txt1: {
    color: 'grey',
  },
  txt2: {
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    color: 'black',
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    fontSize: 17,
  },
  contain: {
    backgroundColor: '#E3E3E3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  icon: {
    position: 'relative',
    top: 10,
    right: 10,
  },
  txt3: {
    color: '#704F38',
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginVertical: 15,
    fontSize: 15,
  },
  button1: {
    backgroundColor: '#704F38',
    borderRadius: 20,
    marginTop: 30,
  },
  txt4: {
    textAlign: 'center',
    fontSize: 25,
    paddingVertical: 10,
    color: 'white',
  },
  contain1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50,
  },
  txt5: {
    textDecorationLine: 'line-through',
    color: '#E3E3E3',
  },
  contain2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  apple: {
    borderWidth: 0.2,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  contain3: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },
  txt6: {
    color: 'black',
    fontSize: 15,
  },
  txt7: {
    color: '#704F38',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});
