import { View, Button, Alert } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";

export async function verifyPermissions() {
  try {
    const response = await Notifications.getPermissionsAsync();
    console.log("Notification status", response);
    if (response.status) {
      return true;
    }
    const requestResponse = await Notifications.requestPermissionsAsync();
    return requestResponse.granted;
  } catch (error) {
    console.log("Permission error", error);
    return false;
  }
}

const NotificationManager = async () => {
  async function scheduleNotificationHandler() {
    try {
      const hasPermission = await verifyPermissions();
      console.log(hasPermission);
      if (!hasPermission) {
        Alert.alert("You need to enable notifications");
        return;
      }
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Goal Reminder",
          body: "This is your reminder",
          data: { url: "www.google.com" },
        },
        trigger: {
          seconds: 5,
        },
      });
    } catch (error) {
      console.log("Notification error", error);
    }
  }

  return (
    <View>
      <Button
        title="Remind me to add a goal"
        onPress={scheduleNotificationHandler}
      />
    </View>
  );
};

export default NotificationManager;
