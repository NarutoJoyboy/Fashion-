import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeCategory from './HomeCategory';
import Productitems from './productitems';

export default function Home() {
  const Width = Dimensions.get('window').width;
  const Height = Dimensions.get('window').height;

  const Images = [
    {title: 'Shyam', image: require('../Images/1.jpg')},
    {title: 'Shyam', image: require('../Images/2.jpg')},
    {title: 'Shyam', image: require('../Images/3.jpg')},
    {title: 'Shyam', image: require('../Images/4.png')},
  ];

  const [activeDotIndex, setactiveDotIndex] = useState(0);

  const _carousel = useRef();
  // useEffect(()=>{
  //   <Carousel
  //   autoPlay={true}
  //   />
  // })

  const CarouselView = () => {
    return (
      <View>
        <Carousel
          loop
          width={Width / 1.3}
          height={Height / 3}
          ref={_carousel}
          // autoPlay={onF}
          scrollAnimationDuration={2000}
          data={Images}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index, item}) => (
            <View style={{borderWidth: 1}}>
              <Image
                source={item.image}
                style={{
                  width: Width / 1.3,
                  height: Height / 3.5,
                  borderRadius: 20,
                  resizeMode: 'contain',
                }}
              />
            </View>
          )}
        />
        {/* <Pagination
          CarouselRef={_carousel}
          activeDotIndex={activeDotIndex}
          dotsLength={3}
          dotStyle={{
            width: 15,
            backgroundColor: 'orange',
          }}
        /> */}
      </View>
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginHorizontal: 20,
        }}>
        <View style={{marginHorizontal: 10}}>
          <Text>Location</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="location-on" size={30} color={'brown'} />
            <Text style={{fontSize: 15, color: 'black'}}>City, </Text>
            <Text style={{fontSize: 15, color: 'black'}}>Country</Text>
            <TouchableOpacity>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#C5C5C5',
            borderRadius: 30,
            alignSelf: 'center',
            padding: 10,
          }}>
          <Octicons name="bell-fill" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 20,
            width: Width / 1.2,
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Octicons name="search" size={25} color={'black'} />
          <TextInput
            placeholder="Search"
            style={{width: Width / 1.38, paddingHorizontal: 10}}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'brown',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 20,
            marginLeft: 5,
          }}>
          <FontAwesome6 name="sliders" size={20} color={'white'} />
        </TouchableOpacity>
      </View>

      <View style={{alignSelf: 'center'}}>
        <CarouselView />
      </View>
      <View>
        <HomeCategory />
      </View>
      <View>
        <Productitems />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
