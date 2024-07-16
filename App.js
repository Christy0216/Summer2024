import React from "react";
import Home from "./Components/Home";
import GoalDetails from "./Components/GoalDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "All Goals",
            headerStyle: { backgroundColor: "darkmagenta" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ navigation, route }) => {
            return {
              title: route.params.goalObj.text,
              headerRight: () => {
                return (
                  <Button
                    title="Warning"
                    onPress={() => {
                      console.log("Warning");
                    }}
                  ></Button>
                );
              },
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
