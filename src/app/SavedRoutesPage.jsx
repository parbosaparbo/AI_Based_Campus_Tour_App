import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

const SavedRoutesPage = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />
      
      <View className="flex-row items-center mb-6 z-50 mt-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-zinc-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Saved Routes</Text>
      </View>

      <View className="flex-1 items-center justify-center">
        <View className="bg-blue-500/20 p-6 rounded-full mb-6">
          <Ionicons name="map-outline" size={80} color="#3b82f6" />
        </View>
        <Text className="text-white text-2xl font-bold mt-4">No Saved Routes</Text>
        <Text className="text-gray-400 text-center mt-3 px-10 text-base leading-6">
          Ask the AI Assistant for directions to any building on campus to generate and save your route offline.
        </Text>
      </View>
    </View>
  )
}

export default SavedRoutesPage;
