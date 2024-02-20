import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Image  } from 'react-native'
import React, { useState } from 'react'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { CheckBox } from 'react-native-elements'
import Verification_1 from './Verification_1'
import Signin_1 from './Signin_1'

export default function Signup_1({navigation}) {

    const [Vieww, setVieww] = useState(false)
    const [ischeck, setischeck] = useState(false)

    const [nameCheck, setnameCheck] = useState('')
    const [emailEnter, setemailEnter] = useState('')
    const[passwordEnter, setpasswordEnter] = useState('')

    const [nameValid, setnameValid] = useState(false)
    const [emailValid, setemailvalid] = useState(false)
    const [passwordValid, setpasswordValid] = useState(false)


    // const nameEnteryCheck = (text) => {
    //     setnameCheck(text);
        
    // }

    // const emailEnteryCheck = (text) => {
    //     setemailEnter(text);
    //     setemailvalid(text.endsWith("@gmail.com"))
    // }
    // const passwordEnteryCheck = (text) => {
    //     setpasswordEnter(text);
    //     setpasswordValid(text.length === 10)
    // }

    // const ValidEntry = () =>{
    //     if (nameValid && emailValid && passwordValid && ischeck){
    //         navigation.navigate(Verification_1)
    //     }
    //     else {
    //         Alert.alert('failed to Sign in')
    //     }
    // }

    // const createUser = () => {
    //     if (!emailEnter || !passwordEnter) {
    //         // Check if email or password is empty or null
    //         Alert.alert(' Name, Email and password are required');
    //         return;
    //       }
        
    //     auth()
    //       .createUserWithEmailAndPassword(emailEnter, passwordEnter)
    //       .then(() => {
    //         console.log('User account created & signed in!');
    //       })
    //       .catch(error => {
    //         if (error.code === 'auth/email-already-in-use') {
    //           console.log('That email address is already in use!');
    //         }
    
    //         if (error.code === 'auth/invalid-email') {
    //           console.log('That email address is invalid!');
    //         }
    
    //         console.error(error);
    //       });
    //   };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contain4}>
                <Text style={styles.txt}>Create Account</Text>
                <Text style={styles.txt1}>Fill your information below or register</Text>
                <Text>with your social account.</Text>
            </View>

            <View>
                <Text style={styles.txt2}>Name</Text>
                <TextInput 
                placeholder='Ex. John Doe' 
                placeholderTextColor={'grey'} 
                style={(styles.txt, styles.input)}
                value={setnameCheck}
                // onChangeText={nameEnteryCheck}
                />

                <Text style={styles.txt2}>Email</Text>
                
                <TextInput 
                placeholder='example@gmail.com' 
                style={(styles.txt, styles.input)} 
                placeholderTextColor={'grey'} 
                keyboardType='email-address' 
                // onChangeText={emailEnteryCheck}
                value={emailEnter}
                
                />
                <Text style={styles.txt2}>Password</Text>

                <View style={styles.contain}>

                    <TextInput 
                    secureTextEntry={!Vieww} 
                    placeholder='***********' 
                    style={(styles.input)} 
                    placeholderTextColor={'grey'}  
                    // onChangeText={passwordEnteryCheck}
                value={passwordEnter}
                maxLength={10}
                    
                    />

                    <TouchableOpacity onPress={() => setVieww(!Vieww)}>
                        <Feather name={Vieww ? 'eye' : 'eye-off'} color={'black'} size={25} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.contain5}>

                    <CheckBox 
                    checkedColor='#DF711D'
                    checked={ischeck}
                    onPress={()=> setischeck(!ischeck)}
                    style={styles.check}
                    />
                    <Text style={styles.txt8}>Agree with </Text>
                <TouchableOpacity>
                    <Text style={styles.txt3}>Terms & Condition</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button1} onPress={()=> {createUser(), ValidEntry()}}>
                    <Text style={styles.txt4}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contain1}>
                <Text style={styles.txt5}>                        </Text>
                <Text style={styles.txt1}>  Or sign up with  </Text>
                <Text style={styles.txt5}>                        </Text>
            </View>

            <View style={styles.contain2}>
                <TouchableOpacity style={styles.apple}>
                <FontAwesome name='apple' color={'black'} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.apple}>
                {/* <FontAwesome name='google' color={'black'} size={30}/> */}
                <Image source={require('./Images/google-logo.png')}
                
                style={styles.img}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.apple}>
                <FontAwesome name='facebook' color={'#17A9FD'} size={30}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contain3}>
                <Text style={styles.txt6}>Already have an account? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate(Signin_1)}>
                    <Text style={styles.txt7}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex:1,
    },
    contain4:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    txt: {
        color: 'black',
        fontSize: 35,
        marginBottom:10
    },
    txt1: {
        color: 'grey',
        
    },
    txt2: {
        color: 'black',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        color: 'black',
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        fontSize: 17
    },
    contain: {
        backgroundColor: '#E3E3E3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10
    },
    icon: {
        position: 'relative',
        top: 10,
        right: 10
    },
    contain5:{
        flexDirection:'row',
        alignItems:'center'
    },
    check:{
        
    },
    txt8:{
        fontSize:15,
        color:'black',

    },
    txt3: {
        color: '#DF711D',
        textDecorationLine: 'underline',
        fontSize: 15,

    },
    button1: {
        backgroundColor: '#DF711D',
        borderRadius: 20,
        marginTop: 30,


    },
    txt4: {
        textAlign: 'center',
        fontSize: 25,
        paddingVertical: 10,
        color:'white'
    },
    contain1:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:50
    },
    txt5:{
        textDecorationLine:'line-through',
        color:'#E3E3E3'
    },
    contain2:{
        flexDirection:'row',
        justifyContent:'center',
        
    },
    apple:{
        borderWidth:0.2,
        borderRadius:30,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
        
    },
    contain3:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:40,

    },
    txt6:{
        color:'black',
        fontSize:15,
    },
    txt7:{
        color: '#DF711D',
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    img:(
        width=10,
        height=20
    )
})