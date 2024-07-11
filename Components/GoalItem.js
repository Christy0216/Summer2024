import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const GoalItem = ({ goal, deleteHandler }) => {
  return (
    <View key={goal.id} style={styles.textContainer}>
      <Text style={styles.textStyle}>{goal.text}</Text>
      <Button color="black" title="X" onPress={() => deleteHandler(goal.id)} />
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
    fontSize: 25,
    backgroundColor: "#aaa",
    marginVertical: 15,
    borderRadius: 5,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalItem;
