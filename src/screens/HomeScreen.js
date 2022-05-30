import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>Hi There</Text>
      <Button
        onPress={() => console.log("Button Pressed")}
        title="Go to Component Demo"
      />
      <TouchableOpacity
        onPress={() => {
          console.log("ListScreen Pressed");
        }}
      >
        <Text>Go to ListScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
