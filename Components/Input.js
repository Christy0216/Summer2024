import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect, useRef } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [thankyouVisible, setThankyouVisible] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBlur = () => {
    setThankyouVisible(true);
  };

  const handleChangeText = (changedText) => {
    setText(changedText);
    setThankyouVisible(false);
  };

  return (
    <View>
      <TextInput
        value={text}
        placeholder="Type something"
        autoCapitalize={"none"}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        ref={inputRef}
      />
      {thankyouVisible && <Text>Thank you</Text>}
    </View>
  );
};

export default Input;
