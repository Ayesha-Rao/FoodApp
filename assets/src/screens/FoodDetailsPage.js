import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Requires expo-linear-gradient package

const FoodDetailsPage = ({ route, navigation }) => {
  const { food } = route.params; // Get the food data passed via navigation
  const [quantity, setQuantity] = useState(1);

  // Add to cart functionality
  const addtocart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ foodId: food.id, quantity }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Show a success message
        navigation.navigate("addtocart"); // Navigate to AddToCart page
      } else {
        alert("Failed to add to cart. Please try again.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <LinearGradient
      colors={["#1f1c2c", "#928dab"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        {/* Food Image */}
        <Image source={{ uri: food.image }} style={styles.foodImage} />

        {/* Food Details */}
        <View style={styles.foodDetailsCard}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDescription}>{food.description}</Text>
          <Text style={styles.foodPrice}>Price: ${food.price}</Text>

          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              value={quantity.toString()}
              onChangeText={(value) =>
                setQuantity(Math.max(1, parseInt(value) || 1))
              }
              style={styles.quantityInput}
            />
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Add to Cart Button */}
          {/* <TouchableOpacity style={styles.addToCartButton} onPress={addtocart}>
            <LinearGradient
              colors={["#ff7e5f", "#feb47b"]}
              style={styles.addToCartGradient}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </LinearGradient>
          </TouchableOpacity> */}
          <TouchableOpacity
      style={styles.addToCartButton}
      onPress={() => navigation.navigate('AddToCart')}
    >
       <LinearGradient
              colors={["#ff7e5f", "#feb47b"]}
              style={styles.addToCartGradient}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </LinearGradient>
      {/* <Text style={styles.addToCartText}>Add to Cart</Text> */}
    </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  foodImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  foodDetailsCard: {
    backgroundColor: "rgba(172, 163, 163, 0.9)",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  foodName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  foodDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: 50,
    textAlign: "center",
    marginHorizontal: 10,
    fontSize: 16,
  },
  addToCartButton: {
    marginTop: 20,
    borderRadius: 5,
  },
  addToCartGradient: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FoodDetailsPage;
