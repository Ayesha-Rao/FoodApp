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
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const FoodPage = () => {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const navigation = useNavigation();
  const handleProfilePress = () => {
    navigation.navigate('Profile'); // This will navigate to the Profile screen
  };
  // Fetch food data from the backend
  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch("http://192.168.18.252:5000/api/food"); // Replace with your backend API URL
        const data = await response.json();
        console.log(data); // Log to check the fetched data
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
    <LinearGradient
      colors={["#000000", "#1a1a1a", "#333333"]} // Black gradient effect
      style={styles.container}
    >
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
        keyExtractor={(item) => (item.id ? item.id.toString() : item.name)} // Handle undefined 'id'
        renderItem={renderFoodCard}
        contentContainerStyle={styles.foodList}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomBarText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomBarText}>Cart</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.bottomBarText}>Profile</Text>
        </TouchableOpacity> */}
         <TouchableOpacity style={styles.button} onPress={handleProfilePress}>
      <Text style={styles.bottomBarText}>Profile</Text>
    </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    padding: 30,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Transparent black for better blending
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  foodList: { padding: 10 },
  foodCard: {
    backgroundColor: "rgb(206, 198, 198)",
    borderRadius: 20,
    marginBottom: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
  },
  foodImage: {
    width: 150,
    height: 150,
  },
  foodDetails: {
    flex: 1,
    padding: 40,
  },
  foodName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  foodPrice: {
    fontSize: 14,
    color: "#666",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 40,
    borderTopWidth: 3,
    borderColor: "#ddd",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark transparent background
  },
  bottomBarText: {
    color: "#fff", // White text for bottom navigation
  },
});

export default FoodPage;
