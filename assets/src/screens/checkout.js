import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Profile from "./profile";

const Checkout = ({navigation}) => {
  const [billing, setBilling] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Large Pizza", price: 150.0, quantity: 1 },
    { id: "2", name: "Rango Tango Burger", price: 50.0, quantity: 2 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>
        {item.quantity} x ${item.price}
      </Text>
    </View>
  );

  const handleProceedToPayment = () => {
    // Handle payment processing here (or validation)
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Checkout</Text>
      </View>

      {/* Billing Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Billing Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={billing.name}
          onChangeText={(text) => setBilling({ ...billing, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Street Address"
          placeholderTextColor="#aaa"
          value={billing.address}
          onChangeText={(text) => setBilling({ ...billing, address: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#aaa"
          value={billing.city}
          onChangeText={(text) => setBilling({ ...billing, city: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          placeholderTextColor="#aaa"
          value={billing.postalCode}
          onChangeText={(text) => setBilling({ ...billing, postalCode: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
          value={billing.phone}
          onChangeText={(text) => setBilling({ ...billing, phone: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          value={billing.email}
          onChangeText={(text) => setBilling({ ...billing, email: text })}
        />
      </View>

      {/* Payment Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={payment.cardNumber}
          onChangeText={(text) => setPayment({ ...payment, cardNumber: text })}
        />
        <View style={styles.paymentRow}>
          <TextInput
            style={[styles.input, { flex: 0.5, marginRight: 10 }]}
            placeholder="MM/YY"
            placeholderTextColor="#aaa"
            value={payment.expiryDate}
            onChangeText={(text) => setPayment({ ...payment, expiryDate: text })}
          />
          <TextInput
            style={[styles.input, { flex: 0.5 }]}
            placeholder="CVV"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={payment.cvv}
            onChangeText={(text) => setPayment({ ...payment, cvv: text })}
          />
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity  style={styles.checkoutButton}
              onPress={() => navigation.navigate('profile')}>
        <Text style={styles.checkoutButtonText}>My Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "linear-gradient(to bottom,rgb(154, 111, 111),rgb(99, 56, 31))",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  input: {
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemQuantity: {
    fontSize: 16,
    color: "#888",
  },
  totalContainer: {
    marginTop: 15,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  checkoutButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Checkout;
