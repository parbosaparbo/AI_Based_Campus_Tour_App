import { View, Text, Image, Pressable, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ShortsLinks = () => {
  const router = useRouter();

  const features = [
    {
      title: "Buildings",
      desc: "Explore campus Buildings.",
      img: require("../../../assets/images/wallpaper.webp"),
      route: "/MapView"
    },
    {
      title: "Events",
      desc: "See upcoming events.",
      img: require("../../../assets/images/wallpaper.webp"),
      route: "/EventsPage"
    },
    {
      title: "Map",
      desc: "Find your way around.",
      img: require("../../../assets/images/wallpaper.webp"),
      route: "/MapView"
    },
    {
      title: "Links",
      desc: "Access useful resources.",
      img: require("../../../assets/images/wallpaper.webp"),
      route: "/LinksPage"
    },
  ];

  const handlePress = (route) => {
    if (route) {
      router.push(route);
    } else {
      Alert.alert("Coming soon!");
    }
  };

  return (
    <View className="flex-row flex-wrap px-4 mt-4">
      {features.map((item, index) => (
        <View key={index} className="w-1/2 p-2">
          <TouchableOpacity 
            className="bg-zinc-800 rounded-2xl p-4 flex-row items-center"
            onPress={() => handlePress(item.route)}
          >
            <Image
              source={item.img}
              className="w-12 h-12 mr-3"
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="text-white font-bold">
                {item.title}
              </Text>
              <Text className="text-gray-400 text-[10px] mt-1">
                {item.desc}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ShortsLinks;
