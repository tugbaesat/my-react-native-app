import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
        borderRadius: 5,
        padding: 10,
      }}
    >
      <Text style={{ color: "lightblue", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
