import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import TopSpace from '../components/Fix-UI/TopSpace'
import MapPage from '../components/Maps components/MapPage'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter, useGlobalSearchParams } from 'expo-router';

const MapView = () => {
  const { width } = Dimensions.get("screen")
  const router = useRouter();
  const { targetLat, targetLng } = useGlobalSearchParams();

  return (
    <View className="flex-1 bg-black">
      <TopSpace/>
      
      {/* Top Header with Back Button */}
      <View className="flex-row items-center px-4 py-2 bg-black z-50">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Campus Map</Text>
      </View>

      {/* Map fills remaining space */}
      <View className="flex-1">
        <MapPage 
          key={`${targetLat}-${targetLng}`} 
          width={width} 
          targetLat={targetLat} 
          targetLng={targetLng}
        />  
      </View>
    </View>
  )
}

export default MapView