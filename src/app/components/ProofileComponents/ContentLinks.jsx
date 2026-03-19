import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";

const ContentLinks = (props) => {
  return (
    <Pressable onPress={() => Alert.alert("pressed")}>
      <View className="flex-row items-center ">
        <View className="w-full bg-gray-800 rounded-3xl py-4 px-5 my-3 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text>{props.icons}</Text>
            <Text className="text-white font-semibold text-3xl ml-3">
              {props.name}
            </Text>
          </View>

          <View>
            <Text className="text-white">
              <Ionicons name="chevron-forward" size={28} />
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ContentLinks;
