// import {View, Text, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import Onboarding from 'react-native-onboarding-swiper';
// import { useNavigation } from '@react-navigation/native';
// import CreateAccount from './CreateAcc';
// import AntDesign from "react-native-vector-icons/AntDesign"

// export default function OnboardingScreen() {
//     const navigation= useNavigation()
    
//     const Next = () =>{
//       return(
          
//         <View >
//           <TouchableOpacity style={{backgroundColor:'#704F38', borderRadius:30, padding:10, marginHorizontal:20}} >
//               <AntDesign name='arrowright' color={'white'} size={25}/>
//           </TouchableOpacity>
//           </View>
//       )
//   };


//   return (
//     <View style={{flex:1, backgroundColor:'white'}}>
        
        
        
//       <Onboarding 
//       onSkip={()=>navigation.navigate(CreateAccount)}
//       onDone={()=>navigation.navigate(CreateAccount)}

      
//       // NextButtonComponent={Next}
//         pages={[
//           {
//             backgroundColor: 'white',
//             image: <Image source={require('../Images/catlisticons/image10.png')} style={{width:100, height:300}}/>,
//             title: 'Welcome',
//             subtitle: 'my name is Anthony gonsarvis',
//           },
//           {
//             backgroundColor: 'white',
//             image: <Image source={require('../Images/catlisticons/image10.png')}/>,
//             title: 'Welcome',
//             subtitle: 'my name is Anthony gonsarvis',
//           },
//           {
//             backgroundColor: 'white',
//             image: <Image source={require('../Images/catlisticons/image10.png')}/>,
//             title: 'Welcome',
//             subtitle: 'my name is Anthony gonsarvis',
//           },
//         ]}
//       />
//     </View>
//   );
// }


import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function OnboardingScreen()  {
  return (
    <PagerView style={styles.pagerView} initialPage={0} >
      <View key="1">
      <Image source={require('../Images/catlisticons/image10.png')} />
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
      <View key="3">
      <Image source={require('../Images/catlisticons/image10.png')} />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});


