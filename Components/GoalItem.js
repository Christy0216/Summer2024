import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import PressableButton from "./PressableButton";
import { MaterialIcons } from '@expo/vector-icons';

const GoalItem = ({ goal, deleteHandler }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.textContainer}>
      <Pressable
        android_ripple={{ color: "pink" }}
        style={({ pressed }) => {
          return [styles.horizontalContainer, pressed && styles.pressedStyle];
        }}
        onPress={function () {navigation.navigate("Details", { goalObj: goal });}}
      >
        <Text style={styles.textStyle}>{goal.text}</Text>
        <View style={styles.buttonStyle}>
          <PressableButton
          componentStyle={styles.buttonStyle}
            pressedFunction={() => {
              deleteHandler(goal.id);
            }}
          >
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </PressableButton>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "darkmagenta",
    fontSize: 25,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#aaa",
  },
  pressedStyle: {
    opacity: 0.5,
  },
  textContainer: {
    color: "darkmagenta",
    backgroundColor: "#aaa",
    marginVertical: 15,
    borderRadius: 5,
  },
  buttonStyle: {
    marginLeft: 15,
    backgroundColor: "grey",
    padding: 5,
  },
});

export default GoalItem;
