import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome to My awesome app</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderColor: "darkmagenta",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "darkmagenta",
    fontSize: 20,
  },
});

export default Header;
