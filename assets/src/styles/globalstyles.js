import { StyleSheet } from 'react-native';

const globalstyles = StyleSheet.create({
  container: {
    flex: 1, // This allows the container to fill the available screen space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c2833', // Corrected background color
  },
  image: {
    width: 300,
    height: 300,
    imageAlign: 'center',
    
    borderRadius: 70,
    marginBottom: 20,
    borderColor: 'grey',
    borderWidth: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', // Tomato red
  },
  subtitle: {
    fontSize: 16,
    color: '#696969', // Dark grey
  },
  button: {
    
    borderWidth	: 1,
    borderColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 130,
    width: '80%',
  },
  buttonText: {
    color: '#ffffff', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default globalstyles;
