// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './assets/src/screens/Homescreen'; // Import your HomeScreen component
import Signup from './assets/src/screens/Signup';
import Login from './assets/src/screens/Login';
import FoodPage from './assets/src/screens/FoodPage';
import FoodDetailsPage from './assets/src/screens/FoodDetailsPage';
import addtocart from './assets/src/screens/addtocart';
import Profile from './assets/src/screens/profile';
import FoodItems from './assets/src/screens/fooditems';
import Checkout from './assets/src/screens/checkout';
import TrackOrder from './assets/src/screens/trackorder';
import ContactSupport from './assets/src/screens/ContactSupport';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Set HomeScreen as the initial screen */}
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FoodPage" component={FoodPage} options={{ title: "Food Menu" }} />
        <Stack.Screen name="FoodDetails" component={FoodDetailsPage} options={{ title: "Food Details" }} /> 
        <Stack.Screen name="AddToCart" component={addtocart} />
        {/* <Stack.Screen name="AddToCart" component={addtocart} />
        {/* <Stack.Screen name="fooditems" component={FoodItems} /> */}
        <Stack.Screen name="checkout" component={Checkout} />
        {/* <Stack.Screen name="trackorder" component={TrackOrder} /> */}
        {/* <Stack.Screen name="ContactSupport" component={ContactSupport} /> */}
        <Stack.Screen name="Profile" component={Profile} />

       {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
