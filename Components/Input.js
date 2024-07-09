import { View, Text, TextInput, Modal, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-native";

const Input = ({ inputHandler, isModalVisible }) => {
  const [text, setText] = useState("");
  const [thankyouVisible, setThankyouVisible] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [isModalVisible]);

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
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.container}>
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Input;
