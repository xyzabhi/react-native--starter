import Recat, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        value={red}
        color="Red"
        onIncrease={() => {
          setRed(red + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          {
            setRed(red - COLOR_INCREMENT);
          }
        }}
      />
      <ColorCounter
        value={green}
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => {
          setGreen(green - COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        value={blue}
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => {
          setBlue(blue - COLOR_INCREMENT);
        }}
      />

      <View
        style={{
          height: 400,
          width: 400,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;
