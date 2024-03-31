import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Image, Dimensions, Animated, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from 'react'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Signin from './Signin'
import VerifyCode from './VerifyCode'

export default function CreateAccount({navigation}) {

    const Width = Dimensions.get('window').width;

    const [Vieww, setVieww] = useState(false)
    const [ischeck, setischeck] = useState(false)

    

    return (
        <Animated.View style={styles.container}>
            <View style={styles.contain4}>
                <Text style={styles.txt}>Create Account</Text>
                <Text style={styles.txt1}>Fill your information below or register</Text>
                <Text style={styles.txt1}>with your social account.</Text>
            </View>

            <View>
                <Text style={styles.txt2}>Name</Text>
                <TextInput 
                placeholder='Ex. John Doe' 
                placeholderTextColor={'grey'} 
                style={(styles.txt, styles.input)}
                // value={setnameCheck}
                // onChangeText={nameEnteryCheck}
                />

                <Text style={styles.txt2}>Email</Text>
                
                <TextInput 
                placeholder='example@gmail.com' 
                style={(styles.txt, styles.input)} 
                placeholderTextColor={'grey'} 
                keyboardType='email-address' 
                // onChangeText={emailEnteryCheck}
                // value={emailEnter}
                
                />
                <Text style={styles.txt2}>Password</Text>

                <View style={styles.contain}>

                    <TextInput 
                    secureTextEntry={!Vieww} 
                    placeholder='***********' 
                    style={[styles.input, {width:Width/1.3, }]} 
                    placeholderTextColor={'grey'}  
                    
                    />

                    <TouchableWithoutFeedback onPress={() => setVieww(!Vieww)}>
                        <Feather name={Vieww ? 'eye' : 'eye-off'} color={'black'} size={25} style={styles.icon} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.contain5}>
                    
                    <TouchableWithoutFeedback onPress={()=>setischeck(!ischeck)} style={{paddingRight:5}}>
                        <Feather name={ischeck ? 'check-square': 'square'} size={18} color={ischeck ? '#704F38': 'grey'} />
                    </TouchableWithoutFeedback>
                    <Text style={styles.txt8}>Agree with </Text>
                <TouchableOpacity>
                    <Text style={styles.txt3}>Terms & Condition</Text>
                </TouchableOpacity>
                
                
                </View>

                <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate(VerifyCode)}>
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
                <Image source={require('../Images/catlisticons/google-logo.png')}
                
                style={styles.img}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.apple}>
                <FontAwesome name='facebook' color={'#17A9FD'} size={30}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contain3}>
                <Text style={styles.txt6}>Already have an account? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate(Signin)}>
                    <Text style={styles.txt7}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </Animated.View>
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
        fontSize: 30,
        marginBottom:10
    },
    txt1: {
        color: 'grey',
        fontSize:14
        
    },
    txt2: {
        color: 'black',
        fontSize: 17,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        color: 'black',
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        fontSize: 14,
        paddingLeft:20
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
        alignItems:'center',
        marginTop:10,
        
    },
   
    
    txt8:{
        fontSize:14,
        color:'black',
        paddingLeft:10

    },
    txt3: {
        color: '#704F38',
        textDecorationLine: 'underline',
        fontSize: 12,

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
        color: '#704F38',
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    img:{
        width:50,
        height:50,
    }
})