// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './assets/src/screens/Homescreen'; // Import your HomeScreen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Set HomeScreen as the initial screen */}
        <Stack.Screen name="Home" component={Homescreen} />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
