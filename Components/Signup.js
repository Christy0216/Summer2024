import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginHandler = () => {
    navigation.replace("Login");
  };

  const signupHandler = () => {
    navigation.replace("Signup");
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
      <Text>Confirm Password</Text>
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(changedText) => {
          setPassword(changedText);
        }}
      />
      <Button title="Register" onPress={signupHandler} />
      <Button title="Already Registered? Login" onPress={loginHandler} />
    </View>
  );
}
