import { View, Button, Image, StyleSheet } from "react-native";
import React from "react";
import * as Location from "expo-location";
import { mapsApiKey } from "@env";
import { useState } from "react";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const LocationManager = () => {
  const [response, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState(null);

  async function verifyPermissions() {
    console.log(response);
    if (response.granted) {
      return true;
    }
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }

  const locateUserHandler = async () => {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        Alert.alert("You need to grant permissions to get current location.");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      console.log(location);
    } catch (err) {
      console.log("Error in locateUserHandler: ", err);
    }
  };
  
  return (
    <View>
      <Button title="Find My Location" onPress={locateUserHandler} />
      {location && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
          }}
          style={styles.image}
        />
      )}
    </View>
  );
};

export default LocationManager;

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: 200,
  },
});
