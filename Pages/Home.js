import {View, Text, TouchableOpacity, TextInput, Dimensions, Image} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Carousel from "react-native-reanimated-carousel";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'


export default function Home() {

    const Width = Dimensions.get('window').width;
    const Height = Dimensions.get('window').height;

    const Images= [
        {title:"Shyam", image: require('./Images/image10.png')},
        {title:"Shyam", image: require('./Images/image10.png')},
        {title:"Shyam", image: require('./Images/image10.png')},
        {title:"Shyam", image: require('./Images/image10.png')},
    ]

  return (
    <View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, marginHorizontal:20}}>
        <View style={{marginHorizontal:10}}>
          <Text>Location</Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <MaterialIcons name="location-on" size={30} color={'brown'} />
            <Text style={{fontSize:15, color:'black'}}>City, </Text>
            <Text style={{fontSize:15, color:'black'}}>Country</Text>
            <TouchableOpacity>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor:'#C5C5C5', borderRadius:30, alignSelf:'center', padding:10}}>
          <Octicons name="bell-fill" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', marginHorizontal:10}}>
        <View style={{flexDirection:'row', borderWidth:1, borderRadius:20, width:Width/1.2, alignItems:'center', paddingHorizontal:15 }}>
        <Octicons name='search' size={25} color={'black'}/>
        <TextInput placeholder='Search' style={{width:Width/1.38, paddingHorizontal:10}}/>
        </View>
        <TouchableOpacity style={{backgroundColor:'brown', alignSelf:'center', padding:10, borderRadius:20, marginLeft:5 }}>
        <FontAwesome6 name='sliders' size={20} color={'white'}/>
        </TouchableOpacity>
      </View>

      <View style={{alignSelf:'center', }}>
        <Carousel
        loop
        width={Width/1.3}
        height={Height/3.5}
        // autoPlay={true}
        // scrollAnimationDuration={2000}
        data={Images}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={(index)=>(
            <View>
                <Text style={{color:'black', fontSize:30}}>{index.title}</Text>
                <Image source={require('./Images/image10.png')} style={{width:Width/1.3, height:Height/3.5 }}/>
            </View>
        )}
        
        />
      </View>
    </View>
  );
}
