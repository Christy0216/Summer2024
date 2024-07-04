import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./Components/Header";
import { useState } from "react";

export default function App() {
  const appName = "Summer 2024 class";
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Header name={appName} theme="dark">
        <Text>Child 1</Text>
        <Text>Child 2</Text>
      </Header>
      <TextInput
        value={text}
        placeholder="Type something"
        autoCapitalize={true}
        onChangeText={function (changedText) {
          setText(changedText);
        }}
      />
      <Text>{text}</Text>
      <StatusBar style="auto" />
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
