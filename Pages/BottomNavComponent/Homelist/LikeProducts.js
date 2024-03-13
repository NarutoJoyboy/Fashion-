import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Productdetails from '../productdetails';

export default function LikeProducts(){
  const navigation = useNavigation();

  const filterList = [
    { title: 'All', id: 1, press:false },
    { title: 'Newest', id: 2, press:false },
    { title: 'Men', id: 3, press:false },
    { title: 'Women', id: 4, press:false },
    { title: 'Jacket', id: 5, press:false },
    { title: 'T-shirt', id: 6, press:false },
  ];

  const Width = Dimensions.get('window').width;

  const itemlist = [
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Brown Jacket',
        Price: '$87.43',
        rating: '5.0',
        id: 1,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Red Jacket',
        Price: '$97.43',
        rating: '5',
        id: 2,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Brown Pant',
        Price: '$80.43',
        rating: '5',
        id: 3,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Red Pant',
        Price: '$187.43',
        rating: '5',
        id: 4,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Blue Jacket',
        Price: '$287.43',
        rating: '5',
        id: 5,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Green Jacket',
        Price: '$554.43',
        rating: '5',
        id: 6,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Pink Jacket',
        Price: '$237.43',
        rating: '5',
        id: 7,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Black Jacket',
        Price: '$827.43',
        rating: '5',
        id: 8,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'White Jacket',
        Price: '$807.43',
        rating: '5',
        id: 9,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Black Pant',
        Price: '$871.43',
        rating: '5',
        id: 10,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Brown T-shirt',
        Price: '$287.43',
        rating: '5',
        id: 11,
        favouritechange: true,
      },
      {
        photo: require('../../Images/carouselsliderimage/4.png'),
        name: 'Brown Dress',
        Price: '$879.43',
        rating: '5',
        id: 12,
        favouritechange: true,
      },
    ];
    

  const [favourite, setfavourite] = useState({});
  const [filter, setfilter] = useState({});

  const togglefilter =(itemId)=>{
    setfilter(prevshow=>({
      ...prevshow,
      [itemId]:!prevshow[itemId],
      
    }))
  }

  const Togglelike = (itemId) => {
    setfavourite((prevshow) => ({
      ...prevshow,
      [itemId]: !prevshow[itemId],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <View style={{}}>
          <Text style={[styles.whistxt, { marginLeft: Width / 4 }]}>
            Man
          </Text>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          style={{ marginLeft: 10 }}
          showsHorizontalScrollIndicator={false}>
          {filterList.map((item) => {
            return (
              <View key={item.id}>
                <TouchableOpacity
                  style={[styles.filterButton, {backgroundColor:filter[item.id] ? "brown" :'white' }]}
                  onPress={()=>togglefilter(item.id)}
                  >
                  <Text style={styles.filterText}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.itemContainer}>
        <FlatList
          data={itemlist}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate(Productdetails)}>

              <View style={styles.item}>
                <Image
                  source={item.photo}
                  style={styles.itemImage}
                />
                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={() => Togglelike(item.id)}>
                  <AntDesign
                    name={favourite[item.id] ? 'hearto' : 'heart'}
                    size={20}
                    color={'#704F38'}
                  />
                </TouchableOpacity>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>
                    {item.name}
                  </Text>
                  <View style={styles.ratingContainer}>
                    <AntDesign name="star" size={15} color={'red'} />
                    <Text style={styles.ratingText}>
                      {item.rating}
                    </Text>
                  </View>
                </View>
                <Text style={styles.priceText}>{item.Price}</Text>
              </View>
                    </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  button1: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  whistxt: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 15,
    marginVertical: 10,
    paddingVertical: 10,
  },
  filterText: {
    color: 'black',
    fontSize: 17,
  },
  itemContainer: {
    flex: 1,
  },
  item: {
    marginLeft: 20,
    marginVertical: 10,
  },
  itemImage: {
    width: 170,
    height: 170,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  likeButton: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    color: 'black',
    fontSize: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  ratingText: {
    color: 'grey',
    fontSize: 15,
    paddingLeft: 5,
  },
  priceText: {
    color: 'black',
    fontSize: 20,
  },
});


