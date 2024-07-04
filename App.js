import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";

export default function App() {
  const appName = "Summer 2024 class";
  return (
    <View style={styles.container}>
      <Header name={appName} theme="dark">
        <Text>Child 1</Text>
        <Text>Child 2</Text>
        </Header>
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
