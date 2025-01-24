import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import globalstyles from '../styles/globalstyles'; // Import global styles
import axios from 'axios';


const SignUp = ({ navigation }) => {
    const BACKEND_URL = 'http://192.168.18.252:5000/api/signup'; // Update with your IP address
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post(BACKEND_URL, {
        name,
        email,
        password,
      });
  
      console.log('Sign up successful', response.data);
      alert('Sign Up Successful!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Something went wrong');
    }
  };
  
  
  

  return (
    <ImageBackground
      source={require('../../../assets/images/pexels-valeriya-1199957.jpg')} // Background image
      style={globalstyles.backgroundImage} // Style for background image
    >
      <View style={globalstyles.container1}>
        <Text style={globalstyles.title1}>Sign Up</Text>

        {/* Input Fields */}
        <TextInput
          style={globalstyles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={globalstyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={globalstyles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={globalstyles.button1} onPress={handleSignUp}>
          <Text style={globalstyles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>

         {/* Login Navigation */}
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={globalstyles.linkText}>
                        Already have an account? Log in
                    </Text>
                </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
