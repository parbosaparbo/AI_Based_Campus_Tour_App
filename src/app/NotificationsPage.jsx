import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

const NotificationsPage = () => {
  const router = useRouter();
  const [eventsPush, setEventsPush] = useState(true);
  const [tourPush, setTourPush] = useState(false);
  const [newsPush, setNewsPush] = useState(true);

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />
      
      <View className="flex-row items-center mb-6 z-50 mt-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-zinc-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Push Notifications</Text>
      </View>

      <Text className="text-gray-400 mb-6 px-2 text-base">
        Manage the alerts and updates you receive from SITMap.
      </Text>

      <View className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
        <View className="flex-row justify-between items-center py-4 border-b border-zinc-800">
          <View>
            <Text className="text-white text-lg font-bold">Upcoming Events</Text>
            <Text className="text-gray-500 text-xs mt-1">Get notified about new campus events.</Text>
          </View>
          <Switch value={eventsPush} onValueChange={setEventsPush} trackColor={{ false: "#3f3f46", true: "#3b82f6" }} thumbColor={eventsPush ? "#ffffff" : "#a1a1aa"} />
        </View>
        
        <View className="flex-row justify-between items-center py-4 border-b border-zinc-800">
          <View>
            <Text className="text-white text-lg font-bold">Tour Suggestions</Text>
            <Text className="text-gray-500 text-xs mt-1">AI tips for navigating campus.</Text>
          </View>
          <Switch value={tourPush} onValueChange={setTourPush} trackColor={{ false: "#3f3f46", true: "#3b82f6" }} thumbColor={tourPush ? "#ffffff" : "#a1a1aa"} />
        </View>

        <View className="flex-row justify-between items-center py-4">
          <View>
            <Text className="text-white text-lg font-bold">App Updates</Text>
            <Text className="text-gray-500 text-xs mt-1">Critical announcements.</Text>
          </View>
          <Switch value={newsPush} onValueChange={setNewsPush} trackColor={{ false: "#3f3f46", true: "#3b82f6" }} thumbColor={newsPush ? "#ffffff" : "#a1a1aa"} />
        </View>
      </View>
    </View>
  )
}

export default NotificationsPage;
