import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./Components/Header";
import Input from "./Components/Input";

export default function App() {
  const appName = "Summer 2024 class";
  return (
    <View style={styles.container}>
      <Header name={appName} theme="dark">
        <Text>Child 1</Text>
        <Text>Child 2</Text>
      </Header>
      <Input />
      <StatusBar style="auto" />
      {/* <Text>{text}</Text> */}
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
