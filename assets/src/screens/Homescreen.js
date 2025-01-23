// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import globalstyles from '../styles/globalstyles'; 


const HomeScreen = () => {
  return (
    <View style={globalstyles.container}>
      <Image
       source={require('../../../assets/images/pexels-valeriya-1199957.jpg')} // Use the image from the assets folder
        style={globalstyles.image} // Use the global image style
      />
      
      <Text style={globalstyles.title}>Foody Moody</Text>
      <Text style={globalstyles.subtitle}>The best food delivery app in town</Text>
      {/* Button */}
      <TouchableOpacity
        style={globalstyles.button}
        onPress={() => navigation.navigate('SignUp')} // Use the navigation prop to go to the SignUp screen
      >
        <Text style={globalstyles.buttonText}>Continue to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};



export default HomeScreen;
