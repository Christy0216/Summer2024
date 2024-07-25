import { View, Text, Dimensions } from "react-native";
import React from "react";
import { StyleSheet,useWindowDimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = ({ children, name }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.header}>
      <Text style={(styles.headerText, { paddingVertical: height < 415 ? 0 : 5 })}>
        Welcome to My awesome app
      </Text>
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
