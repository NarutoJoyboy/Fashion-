import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Setting from './ProfileParts/Setting';
// import Help_Center from '../Images/ProfileParts/Help_Center';
// import MyOrders from '../Images/ProfileParts/MyOrders';
import PaymentMethods from './ProfileParts/Payment_Methods';
// import invite_friends from '../Images/ProfileParts/invite_friends';
// import Privacy_Policy from '../Images/ProfileParts/Privacy_Policy';
// import EditProfile from '../Images/ProfileParts/EditProfile';
import {BlurView} from '@react-native-community/blur';
import HelpCenter from './ProfileParts/Help_Center';
export default function Profile() {
  const Width = Dimensions.get('window').width;
  const navigation = useNavigation();
  const Component = [
    // {image: require('../Images/Profilecompimages/info-sign.png'), title:'Your Profile', id:1, navigation: navigation.navigate(EditProfile)},
    {
      image: require('../Images/Profilecompimages/credit-card.png'),
      title: 'Payment Methods',
      id: 2,
      navigate: 'PaymentMethods',
    },
    // {image: require('../Images/Profilecompimages/to-do-list.png'), title:'My Orders', id:3, navigation: navigation.navigate(MyOrders)},
    {
      image: require('../Images/Profilecompimages/settings.png'),
      title: 'Setting',
      id: 4,
      navigate: 'Setting',
    },
    {
      image: require('../Images/Profilecompimages/information.png'),
      title: 'Help Center',
      id: 5,
      navigation: 'HelpCenter',
    },
    // {image: require('../Images/Profilecompimages/padlock.png'), title:'Privacy Policy', id:6, navigation: 'Privacy_Policy'},
    // {image: require('../Images/Profilecompimages/user.png'), title:'Invite Friends', id:7, navigation: 'invite_friends'},
  ];

  const [modalvisible, setmodalvisible] = useState(false);

  const LogOut = () => {
    return (
      <Modal transparent={true} visible={modalvisible} animationType="slide">
        <BlurView
          style={{position: 'absolute', bottom: 0, right: 0, left: 0}}
          animationType="fade">
          <View style={{backgroundColor: 'white', justifyContent: 'flex-end'}}>
            <View
              style={{
                borderWidth: 2.2,
                borderColor: 'grey',
                marginHorizontal: Width / 3.5,
                borderRadius: 20,
                marginVertical: 10,
                opacity: 0.4,
              }}
            />
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                textAlign: 'center',
                padding: 10,
              }}>
              Logout
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                marginHorizontal: 20,
                marginVertical: 15,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'grey',
                marginBottom: 20,
              }}>
              Are you Sure you want to log out
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                justifyContent: 'space-between',
                marginHorizontal: 25,
                marginBottom: 20,
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#704F38',
                  paddingHorizontal: 50,
                  paddingVertical: 10,
                  borderRadius: 20,
                }}
                onPress={() => setmodalvisible(false)}>
                <Text style={{fontSize: 20, color: '#704F38'}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#704F38',
                  paddingHorizontal: 50,
                  paddingVertical: 10,
                  borderRadius: 20,
                  backgroundColor: '#704F38',
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Yes, logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    );
  };

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={[styles.profiletxt, {marginLeft: Width / 4}]}>
          Profile
        </Text>
      </View>
      <ScrollView>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <View>
            <Image
              source={require('../Images/carouselsliderimage/4.png')}
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
                backgroundColor: '#704F38',
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
          {Component.map(item => {
            return (
              <View key={item.id}>
                <TouchableOpacity
                  style={styles.listitem}
                  onPress={() => navigation.navigate(item.navigate)}>
                  <View style={styles.iconslist}>
                    <Image source={item.image} style={styles.icons} />
                    <Text style={styles.listitemtxt}>{item.title}</Text>
                  </View>
                  <AntDesign name="right" color={'black'} size={20} />
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
            );
          })}
          <View>
            <TouchableOpacity
              style={styles.listitem}
              onPress={() => setmodalvisible(true)}>
              <View style={styles.iconslist}>
                <Image
                  source={require('../Images/Profilecompimages/login.png')}
                  style={styles.icons}
                />
                <Text style={styles.listitemtxt}>Log Out</Text>
              </View>
              <AntDesign name="right" color={'black'} size={20} />
            </TouchableOpacity>
          </View>
          <LogOut />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button1: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  profiletxt: {
    fontSize: 30,
    color: 'black',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  usertxt: {
    fontSize: 23,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  icons: {
    width: 22,
    height: 22,
  },
  listitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  listitemtxt: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 10,
  },
  iconslist: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    color: 'grey',
    borderBottomWidth: 0.2,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
