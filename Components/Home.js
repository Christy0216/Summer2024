import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  FlatList,
  Pressable,
} from "react-native";
import Header from "./Header";
import Input from "./Input";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";

export default function Home({ navigation }) {
  const appName = "Summer 2024 Class";
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleConfirm = (inputText) => {
    setModalVisible(false);
    const newGoal = { text: inputText, id: Math.random() };
    setGoals((currentGoals) => {
      return [...currentGoals, newGoal];
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  function handleDelete(deletedId) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== deletedId);
    });
  }

  function handlePressGoal(pressedGoal) {
    console.log("Goal pressed", pressedGoal);
    navigation.navigate("Details", { goalObj: pressedGoal });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header name={appName} theme="dark" />
        <PressableButton
          pressedFunction={() => {
            setModalVisible(true);
          }}
          componentStyle={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Add a goal</Text>
        </PressableButton>
        {/* <TouchableOpacity
          style={styles.goalButton}
          onPress={() => setModalVisible(true)}
          onPressIn={() => {}}
          onPressOut={() => {}}
        >
          <Text style={styles.buttonText}>Add a goal</Text>
        </TouchableOpacity> */}
      </View>
      <Input
        isVisible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <StatusBar style="auto" />
      <View style={styles.bottomContainer}>
        {goals.length === 0 ? (
          <Text style={styles.textStyle}>Please Add a Goal</Text>
        ) : (
          <FlatList
            renderItem={({ item }) => {
              return (
                <GoalItem
                  goal={item}
                  deleteHandler={handleDelete}
                  //   pressHandler={handlePressGoal}
                />
              );
            }}
            data={goals}
          />
          //   <ScrollView>
          //     {goals.map((goalObj) => {
          //       console.log(goalObj);
          //       return (
          //         <View key={goalObj.id} style={styles.textContainer}>
          //           <Text style={styles.textStyle}>{goalObj.text}</Text>
          //         </View>
          //       );
          //     })}
          //   </ScrollView>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textStyle: {
    color: "darkmagenta",
    fontSize: 25,
  },
  textContainer: {
    color: "darkmagenta",
    backgroundColor: "#aaa",
    marginVertical: 15,
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: "#dcd",
    flex: 4,
    alignItems: "center",
  },
  goalButton: {
    backgroundColor: "dodgerblue",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: "lightyellow",
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
