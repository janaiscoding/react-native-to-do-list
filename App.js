import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import ToDoElement from "./ToDoElement";
import { data } from "./data";

export default function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleCheck = (item) => {
    const newArray = toDoList.map((todo) => {
      if (item.id !== todo.id) {
        return todo;
      } else {
        // Return a new todo
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
    });
    setToDoList(newArray);
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          backgroundColor: "black",
          flex: 1,
          alignItems: "start",
          justifyContent: "center",
          margin: 20,
          padding: 20,
        }}
      >
        <Text style={{ color: "#B4504F", fontSize: 30 }}>
          My React Native To do list
        </Text>
        {toDoList.map((item) => (
          <ToDoElement
            key={item.id}
            todoItem={item}
            handleCheck={handleCheck}
          />
        ))}
      </SafeAreaView>
    </View>
  );
}
