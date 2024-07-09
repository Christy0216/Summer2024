import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./Components/Header";
import Input from "./Components/Input";
import React, { useState } from "react";

export default function App() {
  const appName = "Summer 2024 class";
  const [receivedText, setReceivedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleInputData(data) {
    console.log("callback fn called with", data);
    setReceivedText(data);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Header name={appName} theme="dark">
        {/* <Text>Child 1</Text> */}
        {/* <Text>Child 2</Text> */}
      </Header>
      <Input inputHandler={handleInputData} isModalVisible={modalVisible} />
      <Text>{receivedText}</Text>
      <StatusBar style="auto" />
      <Button title="Add a goal" onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
