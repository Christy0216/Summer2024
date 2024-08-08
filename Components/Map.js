import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

export default function Map({navigation}) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        onPress={(e) => {
          setSelectedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        <Marker title="Picked Location" coordinate={selectedLocation} />
      </MapView>
      <Button
        title="Confirm Selected Location"
        onPress={() => {
          navigation.navigate("Profile", { selectedLocation });
        }}
        disabled={!selectedLocation}
      />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
