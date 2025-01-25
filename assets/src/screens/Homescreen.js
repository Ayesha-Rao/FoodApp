import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
         source={{
          uri: "https://i.pinimg.com/736x/bd/f9/ba/bdf9baebfce79f6c83dc8e259a3484f3.jpg", // Replace with user's profile image
        }}
        style={styles.backgroundImage}
      />

      {/* Gradient Overlay */}
      {/* <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
        style={styles.overlay}
      /> */}

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>🍴 Foody Moody</Text>
        <Text style={styles.subtitle}>Satisfy Your Cravings with Just a Tap</Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Signup')}
        >
          <LinearGradient
            colors={['#FF512F', '#F09819']}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Continue to Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#FFD700', // Golden color for an elegant feel
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)', // Adds text shadow for better contrast
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    width: 200,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 5,
  },
  buttonGradient: {
    paddingVertical:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
