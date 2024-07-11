import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import Header from './Components/Header';
import Input from './Components/Input';

export default function App() {
  const [receivedText, setReceivedText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = (inputText) => {
    setReceivedText(inputText);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.goalButton}
          onPress={() => setModalVisible(true)}
          onPressIn={() => {}}
          onPressOut={() => {}}
        >
          <Text style={styles.buttonText}>Add a goal</Text>
        </TouchableOpacity>
      </View>
      <Input
        isVisible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <StatusBar style="auto" />
      <View style={styles.bottomContainer}>
        <Text style={styles.textStyle}>{receivedText}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    color: 'darkmagenta',
    fontSize: 16,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  bottomContainer: {
    backgroundColor: 'thistle',
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalButton: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
