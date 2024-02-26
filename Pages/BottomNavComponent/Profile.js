import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView  } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import Setting from '../Images/ProfileParts/Setting';

export default function Profile() {
    const Width = Dimensions.get('window').width;
    const navigation = useNavigation();
    const Component = [
      {image: require('../Images/Profilecompimages/info-sign.png'), title:'Your Profile', id:1, navigation: navigation.navigate()},
      {image: require('../Images/Profilecompimages/credit-card.png'), title:'Payment Methods', id:2, navigation: navigation.navigate()},
      {image: require('../Images/Profilecompimages/to-do-list.png'), title:'My Orders', id:3, navigation: navigation.navigate()},
      {image: require('../Images/Profilecompimages/settings.png'), title:'Setting', id:4, navigation: navigation.navigate(Setting)},
      {image: require('../Images/Profilecompimages/information.png'), title:'Help Center', id:5, navigation: navigation.navigate()},
      {image: require('../Images/Profilecompimages/padlock.png'), title:'Privacy Policy', id:6, navigation: navigation.navigate()},
      {image: require('../Images/Profilecompimages/user.png'), title:'Invite Friends', id:7, navigation: navigation.navigate()},
      {image: require('../Images/Profilecompimages/login.png'), title:'Log Out', id:8, navigation: navigation.navigate()},
    ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={[styles.profiletxt, {marginLeft:Width/4}]}>Profile</Text>
      </View>
      <ScrollView>
      <View style={{alignSelf: 'center', marginTop:20, }}>
        <View >
          <Image
            source={require('../Images/4.png')}
            style={{width: 120, height: 120, borderRadius: 60}}
          />
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 20,
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'brown',
            padding: 5,
            
          }}>
          <AntDesign name="edit" color={'white'} size={25} />
        </TouchableOpacity>
        </View>
        <View>
        <Text style={styles.usertxt}>UserName</Text>

        </View>
      </View>
          <View>
            {Component.map((item)=>{
              return(
                <View >
                  <TouchableOpacity key={item.id} style={styles.listitem}>
                  <View style={styles.iconslist}>
                  <Image source={item.image} style={styles.icons}/>
                  <Text style={styles.listitemtxt}>{item.title}</Text>
                  </View>
                  <AntDesign name='right' color={'black'} size={20}/>
                  </TouchableOpacity>
                  <View style={styles.line}/>
                </View>
              )
            })}
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
      },
      header: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        borderWidth: 1,
      },
      button1: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
      },
      profiletxt:{
        fontSize:30,
        color:'black',
      },
      img:{
        width:150,
        height:150,
        borderRadius:75
      },
      usertxt:{
        fontSize:23,
        color:'black',
        textAlign:'center',
        marginTop:10,
        marginBottom:20
      },
      icons:{
        width:30,
        height:30,
        
      },
      listitem:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        
        alignItems:'center'
      },
      listitemtxt:{
        color:'black',
        fontSize:20,
        paddingLeft:10

      },
      iconslist:{
        flexDirection:'row',
        alignItems:'center'

      },
      line:{
        color:'grey',
        borderBottomWidth:0.2,
        marginBottom:10,
        marginHorizontal:10,
        
      }

})