import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Wishlist() {
  const navigation = useNavigation();

  const filterList = [
    {title: 'All', id: 1},
    {title: 'Newest', id: 2},
    {title: 'Men', id: 3},
    {title: 'Women', id: 4},
    {title: 'Jacket', id: 5},
    {title: 'T-shirt', id: 6},
  ];

  const itemlist = [
    {
      photo: require('../Images/4.png'),
      name: 'Brown Jacket',
      Price: '$87.43',
      rating: '5',
      id: 1,
    },
    {
      photo: require('../Images/4.png'),
      name: 'red Jacket',
      Price: '$97.43',
      rating: '5',
      id: 2,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Brown Pant',
      Price: '$80.43',
      rating: '5',
      id: 3,
    },
    {
      photo: require('../Images/4.png'),
      name: 'red Pant',
      Price: '$187.43',
      rating: '5',
      id: 4,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Blue Jacket',
      Price: '$287.43',
      rating: '5',
      id: 5,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Green Jacket',
      Price: '$554.43',
      rating: '5',
      id: 6,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Pink Jacket',
      Price: '$237.43',
      rating: '5',
      id: 7,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Black Jacket',
      Price: '$827.43',
      rating: '5',
      id: 8,
    },
    {
      photo: require('../Images/4.png'),
      name: 'white Jacket',
      Price: '$807.43',
      rating: '5',
      id: 9,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Black Pant',
      Price: '$871.43',
      rating: '5',
      id: 10,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Brown T-shirt',
      Price: '$287.43',
      rating: '5',
      id: 11,
    },
    {
      photo: require('../Images/4.png'),
      name: 'Brown Dress',
      Price: '$879.43',
      rating: '5',
      id: 12,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <View style={{}}>
          <Text style={styles.whistxt}>My Wishlist</Text>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} style={{marginLeft: 10}}>
          {filterList.map(item => {
            return (
              <View key={item.id}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    marginRight: 15,
                    marginVertical: 10,
                    paddingVertical: 10,
                  }}>
                  <Text style={{color: 'black', fontSize: 17}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={itemlist}
          keyExtractor={item => item.id}
          // horizontal={true}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View style={{borderWidth: 1, marginLeft: 10}}>
                <TouchableOpacity style={{padding:10, borderRadius:30, backfaceVisibility:'hidden'}}>
                  <AntDesign name='heart' size={20} color={'brown'}/>
                </TouchableOpacity>
                <Image
                  source={item.photo}
                  style={{width: 180, height: 180, borderRadius: 20}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black', fontSize: 20}}>
                    {item.name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign name="star" size={20} color={'red'} />
                    <Text style={{color: 'grey', fontSize: 15}}>
                      {item.rating}
                    </Text>
                  </View>
                </View>
                <Text style={{color: 'black', fontSize: 20}}>{item.Price}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  button1: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  whistxt: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
});
