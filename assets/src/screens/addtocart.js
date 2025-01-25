import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient"; // Requires expo-linear-gradient package
const Addtocart = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Large Pizza",
      price: 150.0,
      quantity: 1,
      image:
        "https://static.tossdown.com/images/7c7838da-0e20-487f-afa6-3da96555ad88.webp",
    },
    {
      id: "2",
      name: "Rango Tango Burger",
      price: 50.0,
      quantity: 2,
      image:
        "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    },
    {
      id: "3",
      name: "Cheesy Pasta",
      price: 200.0,
      quantity: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj5fp8DwKOgB02Y1w-suEvsEg_E0eYYdO_A&s",
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        {/* <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('checkout')}
            >
               <LinearGradient
                      colors={["#ff7e5f", "#feb47b"]}
                      style={styles.addToCartGradient}
                    >
                      <Text style={styles.checkoutText}>Proceed To Checkout</Text>
                    </LinearGradient>
              {/* <Text style={styles.addToCartText}>Add to Cart</Text> */}
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4f4f4f",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Arial",
    letterSpacing: 1,
  },
  cartList: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 10,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
    fontFamily: "Arial",
  },
  itemPrice: {
    fontSize: 16,
    color: "#ff7e5f",
    fontWeight: "500",
    marginTop: 5,
  },
  itemQuantity: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 20,
    marginTop: 20,
  },
  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  checkoutButton: {
    backgroundColor: "#ff7e5f",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 40,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#ff7e5f",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Addtocart;
