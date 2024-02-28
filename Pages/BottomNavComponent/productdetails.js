import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Productdetails() {
  const navigation = useNavigation();

  const Width = Dimensions.get('window').width;
  const Height = Dimensions.get('window').height;

  const Photos = [
    {image: require('../Images/carouselsliderimage/4.png'), id: '1'},
    {image: require('../Images/carouselsliderimage/4.png'), id: '2'},
    {image: require('../Images/carouselsliderimage/4.png'), id: '3'},
    {image: require('../Images/carouselsliderimage/4.png'), id: '4'},
    {image: require('../Images/carouselsliderimage/4.png'), id: '5'},
  ];

  const SizeList = [
    {name: 'S', id: 1},
    {name: 'M', id: 2},
    {name: 'L', id: 3},
    {name: 'XL', id: 4},
    {name: 'XXL', id: 5},
  ];

  const Colorlist = [
    {color: 'red', id: 1},
    {color: 'yellow', id: 2},
    {color: 'black', id: 3},
    {color: 'green', id: 4},
    {color: 'blue', id: 5},
    {color: 'brown', id: 6},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.prodtext}>Product Details</Text>
        <TouchableOpacity style={styles.button1}>
          <AntDesign name="hearto" size={23} color={'black'} />
        </TouchableOpacity>
      </View>

    <ScrollView >
      <View>
        <Carousel
          width={Width}
          height={Height / 2}
          // style={{borderWidth: 1}}
          data={Photos}
          renderItem={({item}) => {
            return (
              <View key={item.id}>
                <Image
                  source={item.image}
                  style={[styles.img, {width: '100%', height: Height / 2}]}
                />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.productdetails}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
          <Text style={{fontSize:15, color:'grey'}}>Person's Style</Text>
          <View style={{flexDirection:'row',}}>
            <AntDesign name="star" size={20} color={'red'} />
            <Text style={{fontSize:17, color:'grey', paddingHorizontal:5}}>5</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize:25, color:'black', marginBottom:20}}>Product Name</Text>
        </View>
        <View>
          <Text style={{fontSize:18, color:'black', marginBottom:10}}>Product Details</Text>
          <Text style={{fontSize:15, color:'grey', }}>
            Product's data like what are they and their type quality and vbs heb
            kshsb vsjjhvbj bjhsb b jhb j j j jsjs vj sj j sd sj s sbjhsbhbfhbs{' '}
          </Text>
          <View style={styles.divider} />
        </View>
        <View>
          <Text style={styles.sizetxt}>Select Size</Text>
          <View style={styles.Size}>
            {SizeList.map(item => {
              return (
                <TouchableOpacity key={item.id} style={styles.sizes}>
                  <Text style={styles.sizetxt2}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.sizetxt}>Select color</Text>
          <View style={styles.Size}>
            {Colorlist.map((item) => {
              return (
                <View key={item.id}>
                  {/* <Text>{item.color}</Text> */}
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.color,
                        {backgroundColor: item.color},
                      ]}></TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View>
        
      </View>
    </ScrollView>
    <View style={{padding:20, flexDirection:'row', justifyContent:'space-between', borderTopLeftRadius:20, borderTopRightRadius:20, elevation:30, alignItems:'center', backgroundColor:'white',}}>
        <View>
            <Text style={{fontSize:20, color:'grey'}}>Total Price</Text>
            <Text style={{fontSize:18, color:'black'}}>$83.57</Text>
        </View>
        <View >
            <TouchableOpacity style={{backgroundColor:'brown', flexDirection:'row', alignSelf:'center', padding:15, borderRadius:20}}>
            <Ionicons name='bag' size={25} color={'white'} style={{paddingHorizontal:10}}/>
            <Text style={{color:'white', fontSize:20, paddingHorizontal:15}}>Add to Cart</Text>

            </TouchableOpacity>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  button1: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  prodtext: {
    color: 'black',
    fontSize: 25,
  },
  img: {},
  productdetails: {
    margin: 10,
  },
  divider: {
    borderWidth: 0.2,
    marginTop: 30,
    borderColor: 'grey',
  },
  Size: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  sizes: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 20,
  },
  sizetxt: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
  color: {
    borderRadius: 20,
    padding: 15,
    marginLeft: 10,
  },
  sizetxt2:{
    color:'black',
    fontSize:15,
    
  }
});
