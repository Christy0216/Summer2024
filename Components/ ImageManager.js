import { View, Button, Alert, Image } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet } from "react-native";

const ImageManager = ({ imageUriHandler }) => {
  const [response, requestPermission] = ImagePicker.useCameraPermissions();
  const [imageUri, setImageUri] = useState(null);
  async function verifyPermissions() {
    // console.log(response);
    if (response.granted) {
      return true;
    }
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }

  async function takeImageHandler() {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        Alert.alert("You need to grant permissions to launch camera.");
      }
      const result = await ImagePicker.launchCameraAsync({
        allowEditing: true,
      });
      setImageUri(result.assets[0].uri);
      imageUriHandler(result.assets[0].uri);
    } catch (err) {
      console.log("Error in takeImageHandler: ", err);
    }
  }

  return (
    <View>
      <Button title="Take Image" onPress={takeImageHandler} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

export default ImageManager;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});
