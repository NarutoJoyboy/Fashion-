import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';

export default function ProfileComplete() {

const Width = Dimensions.get('window').width

  const navigation = useNavigation();

  const Gender = ["Male", "Female", "Other"]

  const Number = ['+1', '+2', '+3', '+91', '+92', '+107', '+203', ]

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <TouchableOpacity
          style={{
            margin: 20,
            borderWidth: 1,
            alignSelf: 'flex-start',
            borderRadius: 25,
          }}
          onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            color={'black'}
            size={30}
            style={{padding: 8}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 10,
          paddingBottom: 10,
          marginBottom: 30,
        }}>
        <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
          Complete Your Profile
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: 'grey',
            textAlign: 'center',
            marginHorizontal: 60,
          }}>
          Don't worry only you can see your personal data. No one else will be
          able to see it.
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <View style={{borderRadius: 50}}>
          <Image
            source={require('./Images/image10.png')}
            style={{width: 120, height: 120, borderRadius: 60}}
          />
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 20,
            position: 'relative',
            bottom: 40,
            backgroundColor: 'brown',
            padding: 5,
          }}>
          <AntDesign name="edit" color={'white'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:20}}>
        <Text style={{color:'black', fontSize:18}}>Name</Text>
        <TextInput placeholder='John Doe' placeholderTextColor={'grey'} style={{color:'black', borderWidth:1, borderRadius:20, }}/>
      </View>
      <View style={{marginHorizontal:20}}>
        <Text style={{color:'black', fontSize:18}}>Phone Number</Text>
        <View style={{flexDirection:'row', borderWidth:1, }}>
        <SelectDropdown data={Number}
        onSelect={(selectedItem, index)=> {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index)=>{
          return(
            <View>
              <Text style={{color:'black'}}>{selectedItem}</Text>
            </View>
          )
        }}
        rowTextForSelection={(item, index)=>{
          return(
            <View>
              <Text style={{color:'black'}}>{item}</Text>
            </View>
          )
        }}
        buttonStyle={{width:Width/2}}
        // defaultButtonText='+1'
        showsVerticalScrollIndicator={true}
        />
        <TextInput placeholder='John Doe'/>
        </View>
      </View>
      <View style={{marginHorizontal:20}}>
        <Text style={{color:'black', fontSize:18}}>Gender</Text>
        <SelectDropdown
	data={Gender}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
  defaultButtonText='Select'
  buttonTextStyle={{color:'black'}}
  buttonStyle={{borderWidth:1, width:Width/1.1, borderRadius:20, backgroundColor:'white', }}
  // renderDropdownIcon={true}
/>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'brown',
          marginHorizontal: 30,
          borderRadius: 40,
          marginTop: 30,
        }}
        // onPress={()=>navigation.navigate(ProfileComplete)}
        >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 23,
            color: 'white',
            padding: 15,
          }}>
          Complete Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
