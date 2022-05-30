import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counter++;
        }}
      />
      <Button title="Decrease" onPress={() => counter--} />
      <Text>Counter is {counter}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default CounterScreen;
