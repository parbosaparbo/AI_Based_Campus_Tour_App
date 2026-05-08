import React from "react";
import { View, Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TopSpace = () => {
  const insets = useSafeAreaInsets();
  // On Android use StatusBar height, on iOS use the real safe area top
  const topHeight = Platform.OS === "android"
    ? (StatusBar.currentHeight || 24)
    : insets.top;

  return <View style={{ height: topHeight, width: "100%", backgroundColor: "black" }} />;
};

export default TopSpace;
