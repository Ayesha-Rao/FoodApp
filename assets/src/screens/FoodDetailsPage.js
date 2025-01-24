import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const FoodDetailsPage = ({ route, navigation }) => {
  const { food } = route.params; // Get the food data passed via navigation
  const [quantity, setQuantity] = useState(1);

  // Add to cart functionality
  const addToCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ foodId: food.id, quantity }),
      });

      const result = await response.json();
      alert(result.message); // Show a success message
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: food.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{food.name}</Text>
      <Text style={styles.foodDescription}>{food.description}</Text>
      <Text style={styles.foodPrice}>Price: ${food.price}</Text>

      <View style={styles.quantityContainer}>
        <Text>Quantity: </Text>
        <TextInput
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={(value) => setQuantity(parseInt(value))}
          style={styles.quantityInput}
        />
      </View>

      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  foodImage: { width: "100%", height: 200, borderRadius: 10 },
  foodName: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  foodDescription: { fontSize: 16, color: "#666", marginBottom: 10 },
  foodPrice: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  quantityContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: 50,
    textAlign: "center",
    marginLeft: 10,
  },
});

export default FoodDetailsPage;
