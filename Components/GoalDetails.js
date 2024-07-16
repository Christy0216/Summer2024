import { View, Text, Button } from "react-native";
import React from "react";

export default function GoalDetails({ navigation, route }) {
  console.log(route.params);
  return (
    <View>
      {route.params ? (
        <Text>
          You are seeing the details of the goal with text:
          {route.params.goalObj.text} and id:{route.params.goalObj.id}
        </Text>
      ) : (
        <Text>More details</Text>
      )}
      <Button
        title="More details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
