import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "red",
    alignItems: "center",
    alignSelf: "center",
  },
  textTwoStyle: {
    flex: 1,
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "red",
    alignSelf: "center",
    alignItems: "center",
  },
  textThreeStyle: {
    flex: 1,
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "red",
    alignItems: "center",
  },
});

export default BoxScreen;
