import { View, Text } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = () => {
    navigation.replace("Signup");
  };

  const loginHandler = () => {
    navigation.replace("Login");
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput placeholder="Email" />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(changedText) => {
          setPassword(changedText);
        }}
      />
      <Button title="Signup" onPress={signupHandler} />
      <Button title="Login" onPress={loginHandler} />
    </View>
  );
}
