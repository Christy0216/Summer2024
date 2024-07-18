import React, { useLayoutEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect } from "react";

export default function GoalDetails({ navigation, route }) {
  const [warning, setWarning] = useState(false);
  function warningHandler() {
    console.log("warning");
    setWarning(true);
    navigation.setOptions({ title: "Warning!" });
  }
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="warning"
          onPress={() => {
            warningHandler();
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
          You are seeing the details of the goal with text :
          {route.params.goalObj.text} and id:{route.params.goalObj.id}
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
    </View>
  );
}
const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
});
