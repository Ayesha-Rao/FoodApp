import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ContactSupport = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Support</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Need help? Fill out the form below or reach out to us directly.
      </Text>

      {/* Contact Form */}
      <View style={styles.form}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={20} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#888"
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
        </View>

        {/* Subject Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="title" size={20} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            placeholderTextColor="#888"
          />
        </View>

        {/* Message Input */}
        <View style={styles.textAreaContainer}>
          <MaterialIcons name="message" size={20} color="#888" />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Your Message"
            placeholderTextColor="#888"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>Or reach us directly:</Text>
        <View style={styles.infoRow}>
          <MaterialIcons name="phone" size={20} color="#3498db" />
          <Text style={styles.infoText}>+1 800-123-4567</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={20} color="#3498db" />
          <Text style={styles.infoText}>support@foodymoody.com</Text>
        </View>
      </View>

      {/* Footer Links */}
      <View style={styles.footer}>
        <Text style={styles.footerLink}>FAQ</Text>
        <Text style={styles.footerLink}>Help Center</Text>
        <Text style={styles.footerLink}>Privacy Policy</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "linear-gradient(to bottom,rgb(234, 230, 235), #3498db)",
    padding: 20,
  },
  header: {
    backgroundColor: "linear-gradient(to bottom,rgb(58, 47, 62), #3498db)",
    paddingVertical: 30,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    backgroundColor: "linear-gradient(to bottom,rgb(5, 2, 6), #3498db)",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f4",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  textAreaContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f1f3f4",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactInfo: {
    marginBottom: 20,
  },
  contactText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#3498db",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  footerLink: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "underline",
  },
});

export default ContactSupport;
