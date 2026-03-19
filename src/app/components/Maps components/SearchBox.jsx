import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  return (
    <View className="w-full px-2 mt-4">
      <View className="flex-row items-center bg-gray-800 rounded-2xl px-4 py-2">
        
        <Ionicons name="search" size={28} color="white" />

        <TextInput
          placeholder="Search..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
          className="ml-2 flex-1 text-2xl py-2 text-white"
        />

      </View>
    </View>
  );
};

export default SearchBox;