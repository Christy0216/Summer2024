import React, { useLayoutEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import { addWarningToGoal } from "../Firebase/firestoreHelper";
import GoalUsers from "./GoalUsers";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Firebase/firebaseSetup";

export default function GoalDetails({ navigation, route }) {
  const [warning, setWarning] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  console.log(route.params);
  useEffect(() => {
    async function getImageUrl() {
      if (route.params) {
        try {
          const url = await getDownloadURL(
            ref(storage, route.params.goalObj.imageUri)
          );
          setImageUrl(url);
          console.log(url);
        } catch (error) {
          console.error("Error getting image URL: ", error);
        }
      }
    }
    getImageUrl();
  }, [route.params]);

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
        <>
          <Text style={warning && styles.warningStyle}>
            You are seeing the details of the goal with text:
            {route.params.goalObj.text} and id: {route.params.goalObj.id}
          </Text>
          {imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </>
      ) : (
        <Text>More details</Text>
      )}
      <Button
        title="More details"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      {route.params && <GoalUsers id={route.params.goalObj.id} />}
    </View>
  );
}
const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
});
