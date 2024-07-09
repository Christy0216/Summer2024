import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header name={appName} theme="dark" />
        {/* <Text>Child 1</Text> */}
        {/* <Text>Child 2</Text> */}
        <Button title="Add a goal" onPress={() => setModalVisible(true)} />
      </View>
      <Input inputHandler={handleInputData} isModalVisible={modalVisible} />
      <View style={styles.buttomContainer}>
        <Text style={styles.textStyle}>{receivedText}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "darkmagenta",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",
  },
});
