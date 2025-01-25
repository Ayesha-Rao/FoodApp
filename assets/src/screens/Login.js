import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import globalstyles from '../styles/globalstyles'; // Import global styles
import axios from 'axios';

const Login = ({ navigation }) => {
    const BACKEND_URL = 'http://192.168.18.252:5000/api/login'; // Use your local IP

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(BACKEND_URL, {
                email,
                password,
            });

            console.log('Login successful', response.data);
            Alert.alert('Login Successful!', `Welcome ${response.data.user.name}`);
            navigation.navigate('FoodPage'); // Redirect to home page on success
        } catch (error) {
            console.error('Error during login:', error.response?.data || error);
            Alert.alert(
                'Login Failed',
                error.response?.data?.message || 'Something went wrong'
            );
        }
    };

    return (
        <ImageBackground
        source={{
            uri: "https://i.pinimg.com/736x/bd/f9/ba/bdf9baebfce79f6c83dc8e259a3484f3.jpg", // Replace with user's profile image
          }}
            style={globalstyles.backgroundImage} // Style for background image
        >
            <View style={globalstyles.container1}>
                <Text style={globalstyles.title1}>Login</Text>

                {/* Input Fields */}
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

                {/* Login Button */}
                <TouchableOpacity style={globalstyles.button1} onPress={handleLogin}>
                    <Text style={globalstyles.buttonText1}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Login;
