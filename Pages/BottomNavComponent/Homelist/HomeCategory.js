// HomeCategory.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeCategory() {
  const [catlist, setcatlist] = useState([
    { icon: require('../../Images/catlisticons/t-shirt.png'), name: 'T-shirt', id: '1' },
    { icon: require('../../Images/catlisticons/jeans.png'), name: 'Pant', id: '2' },
    { icon: require('../../Images/catlisticons/dress.png'), name: 'Dress', id: '3' },
    { icon: require('../../Images/catlisticons/jacket.png'), name: 'Jacket', id: '4' },
  ]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        {catlist.map(item => {
          return (
            <View key={item.id} style={styles.categoryItem}>
              <TouchableOpacity style={styles.categoryButton}>
                <Image source={item.icon} style={styles.categoryIcon} />
              </TouchableOpacity>
              <Text style={styles.categoryName}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop:15,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
  },
  seeAllText: {
    fontSize: 15,
    color: '#704F38',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    
  },
  categoryButton: {
    borderRadius: 50,
    padding: 20,
    backgroundColor: '#E4D2D2',
  },
  categoryIcon: {
    width: 35,
    height: 35,
    tintColor: '#704F38',
  },
  categoryName: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
});