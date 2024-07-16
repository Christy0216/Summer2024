import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const GoalItem = ({ goal, deleteHandler, pressHandler }) => {
  function goalPressed() {
    pressHandler();
  }

  return (
    <View key={goal.id} style={styles.textContainer}>
      <Text style={styles.textStyle}>{goal.text}</Text>
      <View style={styles.buttonStyle}>
        <Button
          color="black"
          title="X"
          onPress={() => deleteHandler(goal.id)}
        />
        <Button color="black" title="i" onPress={() => pressHandler()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "darkmagenta",
    fontSize: 25,
  },
  textContainer: {
    color: "darkmagenta",
    backgroundColor: "#aaa",
    marginVertical: 15,
    borderRadius: 5,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    flexDirection: "row",
    margin: 5,
  },
});

export default GoalItem;
