import React from "react";
import { Image, View } from "react-native";

const Logo = () => {
  return (
    <View className="h-24 w-24 border-blue-200 px-30 items-center justify-center rounded-full ">
      <Image
        source={require("../../../assets/images/college.jpg")}
        className="h-24 w-24 rounded-full"
      ></Image>
    </View>
  );
};

export default Logo;
