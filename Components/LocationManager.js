import { View, Button, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import * as Location from "expo-location";
import { mapsApiKey } from "@env";
import { useState } from "react";
import { Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getADoc, writeWithIdToDB } from "../Firebase/firestoreHelper";
import { auth } from "../Firebase/firebaseSetup";

const windowWidth = Dimensions.get("window").width;

const LocationManager = () => {
  const navigation = useNavigation();
  const route = useRoute();
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
    } catch (err) {
      console.log("Error in locateUserHandler: ", err);
    }
  };

  function chooseLocationHandler() {
    navigation.navigate("Map");
  }

  function saveUserLocation() {
    writeWithIdToDB({ location }, "users", auth.currentUser.uid);
    navigation.navigate("Home");
  }
  useEffect(() => {
    async function getUserData() {
      const userData = await getADoc("users", auth.currentUser.uid);
      if (userData) {
        setLocation(userData.location);
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    if (route.params) {
      console.log(route.params);
      setLocation(route.params.selectedLocation);
    }
  }, [route]);

  return (
    <View>
      <Button title="Find My Location" onPress={locateUserHandler} />
      <Button
        title="Let me choose my location"
        onPress={chooseLocationHandler}
      />
      {location && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
          }}
          style={styles.image}
        />
      )}
      <Button title="Save My Location" onPress={saveUserLocation} />
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
