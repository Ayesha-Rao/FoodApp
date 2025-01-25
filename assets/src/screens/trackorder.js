import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TrackOrder = () => {
  const orderStatus = [
    { id: 1, label: "Order Placed", completed: true },
    { id: 2, label: "Shipped", completed: true },
    { id: 3, label: "Out for Delivery", completed: false },
    { id: 4, label: "Delivered", completed: false },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Track Your Order</Text>
      </View>

      {/* Order Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.orderId}>
          Order ID: <Text style={styles.orderIdHighlight}>#123456789</Text>
        </Text>
        <Text style={styles.itemSummary}>
          Items: Large Pizza, Rango Tango Burger
        </Text>
        <Text style={styles.totalAmount}>Total: $250.00</Text>
      </View>

      {/* Order Status */}
      <View style={styles.statusContainer}>
        {orderStatus.map((status, index) => (
          <View key={status.id} style={styles.statusItem}>
            <View
              style={[
                styles.statusIcon,
                { backgroundColor: status.completed ? "#4CAF50" : "#ddd" },
              ]}
            >
              <MaterialIcons
                name={status.completed ? "check" : "hourglass-empty"}
                size={24}
                color="#fff"
              />
            </View>
            <Text
              style={[
                styles.statusLabel,
                { color: status.completed ? "#4CAF50" : "#888" },
              ]}
            >
              {status.label}
            </Text>
            {index < orderStatus.length - 1 && (
              <View
                style={[
                  styles.statusLine,
                  { backgroundColor: status.completed ? "#4CAF50" : "#ddd" },
                ]}
              />
            )}
          </View>
        ))}
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.supportButton}>
        <Text style={styles.supportButtonText}>Contact Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "linear-gradient(to bottom,rgb(14, 14, 14),rgb(19, 35, 46))",
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  orderId: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333",
  },
  orderIdHighlight: {
    fontWeight: "bold",
    color: "#8e44ad",
  },
  itemSummary: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statusContainer: {
    marginBottom: 20,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  statusIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  statusLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  statusLine: {
    flex: 1,
    height: 2,
    marginHorizontal: 10,
  },
  supportButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  supportButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  homeButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  homeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TrackOrder;
