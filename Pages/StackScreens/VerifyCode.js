import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import NewPassword from './NewPassword';
import Home from '../BottomNavComponent/Homelist/Home';
import BottomNavigation from '../BottomNavComponent/BottomNavigation';

const VerifyCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" color={'black'} size={30} style={styles.backIcon}/>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>Please enter the code just sent to email</Text>
        <Text style={styles.email}>example@gmail.com</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="OTP"
          style={styles.input}
        />
      </View>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive code?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend code</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => navigation.navigate(BottomNavigation)}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    margin: 20,
    borderWidth: 1,
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
  backIcon: {
    padding: 8,
  },
  titleContainer: {
    alignSelf: 'center',
    marginTop: 70,
  },
  title: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: 'grey',
    textAlign: 'center',
  },
  email: {
    fontSize: 17,
    color: '#704F38',
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 70,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  resendContainer: {
    alignSelf: 'center',
    marginTop: 40,
  },
  resendText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  resendLink: {
    color: '#704F38',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#704F38',
    marginHorizontal: 30,
    borderRadius: 40,
    marginTop: 30,
  },
  verifyButtonText: {
    textAlign: 'center',
    fontSize: 23,
    color: 'white',
    padding: 15,
  },
});

export default VerifyCode;
