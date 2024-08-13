import { View, Text } from "react-native";
import React from "react";
import { auth } from "../Firebase/firebaseSetup";
import LocationManager from "./LocationManager";
import NotificationManager from "./NotificationManager";

export default function Profile() {
  return (
    <View>
      <Text>Profile of user with id: {auth.currentUser.uid}</Text>
      <LocationManager />
      <NotificationManager />
    </View>
  );
}
