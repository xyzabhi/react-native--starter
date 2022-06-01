import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hi There</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Component Demo"
      />
      <Button
        title="Go to ListScreen"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go To image Screen"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Counter Screen"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Color Screen"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Square Screen"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
