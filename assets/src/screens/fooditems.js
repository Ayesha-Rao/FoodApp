import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const FoodItems = () => {
  // Sample food data
  const foodData = [
    {
      id: "1",
      name: "Margherita Pizza",
      price: "$12.99",
      image: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Cheeseburger",
      price: "$8.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cwRE4h3vfxnZPndGuyhmrWpgi_lk1w7KNg&s",
      rating: 4.2,
    },
    {
      id: "3",
      name: "Caesar Salad",
      price: "$7.49",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3Xpf9yuSfZnu1J9S-7HATTEZdl4uUDmTvg&s",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Pasta Carbonara",
      price: "$10.99",
      image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/6F320FC7-CBD7-419D-B790-24DA25E975F9/Derivates/9774C36E-8478-4BE3-A8CD-FF02AC5B9BCB.jpg",
      rating: 4.6,
    },
    {
      id: "5",
      name: "Tacos",
      price: "$9.49",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBnQ776pnJJPUuO-soQzNdTPcfn1UhBOPYw&s",
      rating: 4.3,
    },
  ];

  // Food item card component
  const FoodCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodPrice}>{item.price}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.foodRating}>⭐ {item.rating}</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Food List */}
      <FlatList
        data={foodData}
        renderItem={({ item }) => <FoodCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.foodList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "linear-gradient(180deg,rgb(31, 29, 29) 0%,rgb(96, 98, 99) 100%)", // Gradient background
  },
  searchBar: {
    padding: 10,
    backgroundColor: "linear-gradient(180deg,rgb(0, 0, 0) 0%,rgb(180, 180, 180) 100%)", // Gradient background
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  searchInput: {
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#333",
    fontSize: 16,
  },
  foodList: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "#fffbf1", // Soft, pastel yellow for card background
    borderRadius: 15,
    margin: 10,
    flex: 1,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
  },
  foodImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  foodName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginHorizontal: 10,
  },
  foodPrice: {
    fontSize: 14,
    color: "#888",
    marginHorizontal: 10,
    marginBottom: 5,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  foodRating: {
    fontSize: 14,
    color: "#FFD700", // Golden color for rating stars
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 5,
    paddingHorizontal: 3,
    borderRadius: 20,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default FoodItems;
