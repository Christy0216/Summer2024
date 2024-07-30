import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import GoalDetails from "./Components/GoalDetails";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebaseSetup";

const Stack = createNativeStackNavigator();

const AuthStack = (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>
);
const AppStack = (
  <>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Details"
      component={GoalDetails}
      options={({ navigation, route }) => {
        return { title: route.params ? route.params.goalObj.text : "Details" };
      }}
    />
  </>
);

export default function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }
    });
    setIsUserAuthenticated(true);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "darkmagenta" },
          headerTintColor: "white",
        }}
      >
        {isUserAuthenticated ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
