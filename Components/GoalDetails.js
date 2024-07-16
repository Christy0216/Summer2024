import { View, Text, Button } from "react-native";
import React from "react";

export default function GoalDetails({ navigation, route }) {
  console.log("Route params:", route.params);
  return (
    <View>
      {route.params.goalObj ? (
        <Text>
          You are seeing the details of the goal with text:
          {route.params.goalObj.text} and id:{route.params.goalObj.id}
        </Text>
      ) : (
        <Text>More details</Text>
      )}
      <Button
        title="More details"
        onPress={() =>
          navigation.push("Details", { goalObj: route.params.goalObj })
        }
      />
    </View>
  );
}
