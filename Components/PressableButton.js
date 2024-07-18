import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

const PressableButton = ({ children, pressedFunction, componentStyle }) => {
  return (
    <Pressable
      onPress={pressedFunction}
      style={({ pressed }) => {
        return [
          styles.defaultStyle,
          componentStyle,
          pressed && styles.pressedStyle,
        ];
      }}
    >
      <View>{children}</View>
    </Pressable>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.5,
    backgroundColor: "red",
  },
  defaultStyle: {
    backgroundColor: "beige",
    margin: 10,
    padding: 5,
  },
});
