import { View, Text } from "react-native";
import React from "react";
import { auth } from "../Firebase/firebaseSetup";
import LocationManager from "./LocationManager";

export default function Profile() {
  return (
    <View>
      <Text>Profile of user with id: {auth.currentUser.uid}</Text>
      <LocationManager />
    </View>
  );
}
