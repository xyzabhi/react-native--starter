import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Abhinav #1", age: 23 },
    { name: "Abhinav #2", age: 45 },
    { name: "Abhinav #3", age: 26 },
    { name: "Abhinav #4", age: 19 },
    { name: "Abhinavn #5", age: 56 },
    { name: "Abhinav #6", age: 87 },
    { name: "Abhinav #7", age: 12 },
    { name: "Abhinav #8", age: 32 },
    { name: "Abhinav #9", age: 45 },
    { name: "Abhinav #10", age: 78 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text key={index} style={styles.textStyle}>
            {item.name} and age is {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 20,
  },
});

export default ListScreen;
