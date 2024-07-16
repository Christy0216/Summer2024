import React, { useLayoutEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CommonHeader from "./CommonHeader";

export default function GoalDetails({ navigation, route }) {
  const [isWarning, setIsWarning] = useState(false);
  const { goalObj } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Warning" onPress={() => setIsWarning((prev) => !prev)} />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <CommonHeader title={isWarning ? "Warning!" : goalObj.text} />
      <Text style={isWarning ? styles.warningText : null}>
        You are seeing the details of the goal with text: {goalObj.text} and id:{" "}
        {goalObj.id}
      </Text>
      <Button
        title="More details"
        onPress={() => navigation.push("Details", { goalObj })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  warningText: {
    color: "red",
  },
});
