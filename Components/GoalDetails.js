import React, { useLayoutEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect } from "react";
import { addWarningToGoal } from "../Firebase/firestoreHelper";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ navigation, route }) {
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="warning"
          onPress={() => {
            setWarning(true);
            addWarningToGoal(route.params.goalObj.id, "goals");
            navigation.setOptions({ title: "Warning" });
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      {route.params ? (
        <Text style={warning && styles.warningStyle}>
          You are seeing the details of the goal with text:
          {route.params.goalObj.text} and id: {route.params.goalObj.id}
        </Text>
      ) : (
        <Text>More details</Text>
      )}
      <Button
        title="More details"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      <GoalUsers id={route.params.goalObj.id} />
    </View>
  );
}
const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
});
