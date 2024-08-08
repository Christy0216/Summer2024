import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import GoalDetails from "./Components/GoalDetails";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase/firebaseSetup";
import Profile from "./Components/Profile";
import Iconicons from "react-native-vector-icons/Ionicons";
import PressableButton from "./Components/PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import Map from "./Components/Map";

const Stack = createNativeStackNavigator();

const AuthStack = (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>
);
const AppStack = (
  <>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          title: "All Goals",
          headerRight: () => {
            return (
              <PressableButton
                pressedFunction={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Iconicons name="person" size={24} color="black" />
              </PressableButton>
            );
          },
        };
      }}
    />
    <Stack.Screen
      name="Details"
      component={GoalDetails}
      options={({ navigation, route }) => {
        return { title: route.params ? route.params.goalObj.text : "Details" };
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => {
          return (
            <PressableButton
              pressedFunction={() => {
                try {
                  signOut(auth);
                } catch (error) {
                  console.log("Sign out error", error);
                }
              }}
            >
              <AntDesign name="logout" size={24} color="black" />
            </PressableButton>
          );
        },
      }}
    />
    <Stack.Screen name="Map" component={Map} />
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
