import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { readAllDocs, writeToDB } from "../Firebase/firestoreHelper";

const GoalUsers = ({ id }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUserData() {
      try {
        const dataFromFirestore = await readAllDocs(`goals/${id}/users`);
        console.log(dataFromFirestore.length);
        if (dataFromFirestore.length) {
          setUsers(dataFromFirestore);
          return;
        }
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("The request was not successful");
        }
        const data = await response.json();
        data.forEach((userData) => {
          writeToDB(userData, `goals/${id}/users`);
        });
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchUserData();
  }, []);
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default GoalUsers;
