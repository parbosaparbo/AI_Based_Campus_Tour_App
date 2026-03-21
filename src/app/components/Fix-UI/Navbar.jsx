import { View, Text,Image } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View className="bg-gray-950 h-16 px-4 flex flex-row items-center">
      <View>
        <Image
        source={require("../../../assets/images/logoclooge.jpg")}
        className='w-14 h-14 rounded-full '
      />
      </View>
      <View className="px-4">
        <Text className="text-2xl font-bold text-white">SITM Campus App</Text>
      </View>
    </View>
  );
};

export default Navbar;
