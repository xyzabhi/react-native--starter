import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease, value }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()}></Button>
      <Button
        title={`Decrease ${color}`}
        onPress={() => {
          onDecrease();
        }}
      ></Button>
      <Text>{value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ColorCounter;
