import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

const FavoritesPage = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />
      
      <View className="flex-row items-center mb-6 z-50 mt-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-zinc-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Favorites</Text>
      </View>

      <View className="flex-1 items-center justify-center">
        <View className="bg-red-500/20 p-6 rounded-full mb-6">
          <Ionicons name="heart-dislike-outline" size={80} color="#ef4444" />
        </View>
        <Text className="text-white text-2xl font-bold mt-4">No Favorites Yet</Text>
        <Text className="text-gray-400 text-center mt-3 px-10 text-base leading-6">
          Explore the campus map and tap the heart icon on locations to save them here for quick access later.
        </Text>
      </View>
    </View>
  )
}

export default FavoritesPage;
