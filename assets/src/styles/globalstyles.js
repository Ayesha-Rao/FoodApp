import { StyleSheet } from 'react-native';

const globalstyles = StyleSheet.create({
  container: {
    flex: 1, // This allows the container to fill the available screen space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgb(9, 9, 9)', // Corrected background color
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


  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    backgroundColor: 'rgba(7, 6, 6, 0.5)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the background image covers the entire screen
    
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6347', // Tomato red
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button1: {
    backgroundColor: '#FF6347', // Tomato red
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 10,
    color: '#007bff', // Blue color to indicate a link
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
},

});

export default globalstyles;
