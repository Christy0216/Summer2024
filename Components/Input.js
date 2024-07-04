import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        value={text}
        placeholder="Type something"
        autoCapitalize={true}
        onChangeText={function (changedText) {
          setText(changedText);
        }}
      />
    </View>
  );
};

export default Input;
