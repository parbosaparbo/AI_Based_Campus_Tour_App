import { View, Text, Image, Pressable, Alert } from "react-native";
import React from "react";

const ShortsLinks = () => {
  const features = [
    {
      title: "Buildings",
      desc: "Explore campus Buildings.",
      img: require("../../../assets/images/wallpaper.webp"),
    },
    {
      title: "Events",
      desc: "See upcoming events.",
      img: require("../../../assets/images/wallpaper.webp"),
    },
    {
      title: "Map",
      desc: "Find your way around.",
      img: require("../../../assets/images/wallpaper.webp"),
    },
    {
      title: "Links",
      desc: "Access useful resources.",
      img: require("../../../assets/images/wallpaper.webp"),
    },
  ];
  return (
    <Pressable onPress={()=>Alert.alert("I am press")}>

    <View className="flex-row flex-wrap px-4 mt-4">
  {features.map((item, index) => (
    <View key={index} className="w-1/2 p-2">
      
      <View className="bg-zinc-800 rounded-2xl p-4 flex-row items-center">
        
        <Image
          source={item.img}
          className="w-12 h-12 mr-3"
          resizeMode="contain"
          />

        <View className="flex-1">
          <Text className="text-white font-bold">
            {item.title}
          </Text>
          <Text className="text-gray-400 text-sm">
            {item.desc}
          </Text>
        </View>

      </View>

    </View>
  ))}
</View>
  </Pressable>
  );
};

export default ShortsLinks;
