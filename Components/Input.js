import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-native";

const Input = ({ inputHandler }) => {
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

  function handleConfirm() {
    console.log(text);
    inputHandler(text);
  }

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
      <Button
        title="Confirm"
        onPress={() => {
          handleConfirm();
        }}
      />
    </View>
  );
};

export default Input;
