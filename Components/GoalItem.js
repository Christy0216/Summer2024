import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

const GoalItem = ({ goal, deleteHandler }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.textContainer}>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate('Details', { goalObj: goal })}>
      <Text style={styles.textStyle}>{goal.text}</Text>
      <View style={styles.buttonStyle}>
        <Button
          color="black"
          title="X"
          onPress={() => deleteHandler(goal.id)}
        />
        {/* <Button
          color="black"
          title="i"
        /> */}
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'darkmagenta',
    fontSize: 25,
  },
  pressable:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  textContainer: {
    color: 'darkmagenta',
    backgroundColor: '#aaa',
    marginVertical: 15,
    borderRadius: 5,
  },
  buttonStyle: {
    flexDirection: 'row',
    margin: 5,
  },
});

export default GoalItem;
