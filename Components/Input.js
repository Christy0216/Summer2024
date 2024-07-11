import { Modal, View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const Input = ({ isVisible, onConfirm, onCancel }) => {
  const [text, setText] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current && isVisible) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  const handleConfirm = () => {
    onConfirm(text);
    setText('');
  };

  const handleCancel = () => {
    onCancel();
    setText('');
  };

  return (
    <Modal animationType="slide" visible={isVisible} transparent={false}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={text}
          onChangeText={setText}
          ref={inputRef}
        />
        <View style={styles.buttonContainer}>
          <Button title="Confirm" onPress={handleConfirm} disabled={!text} />
          <Button title="Cancel" onPress={handleCancel} />
        </View>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png" }}
          alt="Target Icon"
        />
        <Image
          style={styles.image}
          source={require("../assets/2617812.png")}
          alt="Local Target Icon"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'darkmagenta',
    borderWidth: 3,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default Input;
