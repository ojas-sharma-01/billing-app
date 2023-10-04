import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Todo = ({ text }) => {
  return (
    <View className="bg-white mx-1 my-2 rounded-lg p-2 flex flex-row items-center justify-between">
      <View className="flex-row items-center flex-wrap">
        <View className="w-6 h-6 mx-4 bg-blue-400 opacity-40 rounded-lg" />
        <Text className="text-2xl">{text}</Text>
      </View>
      <View className="pr-3">
        <Text className="text-xl text-red-400 font-bold">X</Text>
      </View>
    </View>
  );
};

export default Todo;
