import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

const Settings = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:Coincollab@gmail.com"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToScreen("Account")}
      >
        <Text style={styles.itemText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToScreen("PasswordReset")}
      >
        <Text style={styles.itemText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToScreen("Login")}
      >
        <Text style={styles.itemText}>Log Out</Text>
      </TouchableOpacity>

      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact us at</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.contactEmail}>Coincollab@gmail.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: "sans-serif"
  },
  item: {
    backgroundColor: "#1DB954",
    borderRadius: 8,
    marginBottom: 20,
    padding: 15
  },
  itemText: {
    color: "white",
    fontSize: 20,
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  contactContainer: {
    alignItems: "center",
    marginTop: 40
  },
  contactTitle: {
    color: "black",
    fontSize: 30,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "center"
  },
  contactEmail: {
    color: "#1DB954",
    fontSize: 30,
    fontFamily: "sans-serif",
    textAlign: "center"
  }
});

export default Settings;

