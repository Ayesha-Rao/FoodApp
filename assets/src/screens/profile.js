import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <View style={styles.background}></View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {/* Profile Image */}
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqEqdBhhua-HhYDFyMhwudonvyM1ebbmqeQ&s", // Replace with user's profile image
          }}
        />
        <Text style={styles.username}>Ayesha</Text>
        <Text style={styles.bio}>
          Food lover 🍕 | Exploring flavors worldwide 🌏 | Always in search of the perfect bite! 🍔
        </Text>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>View Orders</Text>
        </TouchableOpacity>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Settings and Logout */}
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "linear-gradient(to bottom, #FF6347, #FFB347)", // Vibrant gradient
    zIndex: -1,
  },
  profileContainer: {
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    width: "90%",
    maxWidth: 500,
    marginBottom: 40,
    shadowColor: "#FFA500",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#FFD700",
    marginBottom: 20,
  },
  username: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  settingsContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  settingButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  settingButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
