import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import Header from "./Header";
import Input from "./Input";
import GoalItem from "./GoalItem";

export default function Home({ navigation }) {
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
        {goals.length === 0 ? (
          <Text style={styles.textStyle}>Please Add a Goal</Text>
        ) : (
          <FlatList
            renderItem={({ item }) => {
              return (
                <GoalItem
                  goal={item}
                  deleteHandler={handleDelete}
                  pressHandler={handlePressGoal}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    color: "darkmagenta",
    fontSize: 25,
    marginVertical: 5,
  },
  textContainer: {
    color: "darkmagenta",
    fontSize: 25,
    backgroundColor: "#aaa",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  topContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  bottomContainer: {
    backgroundColor: "thistle",
    flex: 4,
    alignItems: "center",
    rowGap: 10,
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
});
