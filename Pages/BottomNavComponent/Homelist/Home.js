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
import HomeCategory from '../Homelist/HomeCategory';
import Productitems from '../productitems';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


export default function Home() {

  const Images = [
    {title: 'Shyam', image: require('../../Images/carouselsliderimage/1.jpg')},
    {title: 'Shyam', image: require('../../Images/carouselsliderimage/2.jpg')},
    {title: 'Shyam', image: require('../../Images/carouselsliderimage/3.jpg')},
    {title: 'Shyam', image: require('../../Images/carouselsliderimage/4.png')},
  ];

  const [activeDotIndex, setactiveDotIndex] = useState(0);

  const _carousel = useRef();

  const CarouselView = () => {
    return (
      <View>
        <Image
          source={require('../../Images/carouselsliderimage/3.jpg')}
          style={{
            width: Width / 1.05,
            height: Height / 4,
            borderRadius: 20,
            marginVertical: 10,
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{}}>
          <Text>Location</Text>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={30} color={'#704F38'} />
            <Text style={styles.locationText}>City, </Text>
            <Text style={styles.locationText}>Country</Text>
            <TouchableOpacity>
              <MaterialIcons name="keyboard-arrow-down" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.bellButton}>
          <Octicons name="bell-fill" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Octicons name="search" size={25} color={'black'} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.slidersButton}>
          <FontAwesome6 name="sliders" size={20} color={'white'} />
        </TouchableOpacity>
      </View>

      <View style={{ alignSelf: 'center' }}>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 15,
    color: 'black',
  },
  bellButton: {
    backgroundColor: '#C5C5C5',
    borderRadius: 30,
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical:8
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    width: Width / 1.2,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    width: Width / 1.38,
    paddingHorizontal: 10,
  },
  slidersButton: {
    backgroundColor: '#704F38',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
    marginLeft: 5,
  },
  carouselImage: {
    width: Width / 1.05,
    height: Height / 4,
    borderRadius: 20,
    marginVertical: 10,
  },
});
