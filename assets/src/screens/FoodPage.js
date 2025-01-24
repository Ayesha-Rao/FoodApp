import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const FoodPage = () => {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const navigation = useNavigation();

  // Fetch food data from the backend
  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch("http://192.168.18.252:5000/api/food"); // Replace with your backend API URL
        const data = await response.json();
        console.log(data);  // Log to check the fetched data
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchFoodData();
  }, []);

  // Render food card
  const renderFoodCard = ({ item }) => (
    <TouchableOpacity
      style={styles.foodCard}
      onPress={() => navigation.navigate("FoodDetails", { food: item })}
    >
      <Image source={{ uri: item?.image }} style={styles.foodImage} />
      <View style={styles.foodDetails}>
        <Text style={styles.foodName}>{item?.name}</Text>
        <Text style={styles.foodPrice}>${item?.price}</Text>
      </View>
    </TouchableOpacity>
  );

  // Filtered food data based on search
  const filteredFood = foodData.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for food..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Food List */}
      <FlatList
        data={filteredFood}
        keyExtractor={(item) => item.id ? item.id.toString() : item.name} // Handle undefined 'id'
        renderItem={renderFoodCard}
        contentContainerStyle={styles.foodList}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  searchBar: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  foodList: { padding: 10 },
  foodCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
  },
  foodImage: {
    width: 100,
    height: 100,
  },
  foodDetails: {
    flex: 1,
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  foodPrice: {
    fontSize: 14,
    color: "#666",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f8f8f8",
  },
});

export default FoodPage;
