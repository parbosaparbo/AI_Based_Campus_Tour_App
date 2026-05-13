import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

import { API_BASE_URL } from './apiConfig'

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/events`);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events");
      }
    };
    fetchEvents();
  }, []);

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />
      
      {/* Top Header with Back Button */}
      <View className="flex-row items-center mb-6 z-50">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-gray-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Campus Events</Text>
      </View>

      {events.length === 0 ? (
        <Text className="text-gray-400 mt-4">Loading events...</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="bg-zinc-800 rounded-2xl p-4 mb-4 border-l-4 border-blue-500">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-white text-lg font-bold flex-1">{item.title}</Text>
                <View className={`px-2 py-1 rounded ${item.status === 'Past' ? 'bg-gray-600' : 'bg-green-600'}`}>
                  <Text className="text-white text-[10px] font-bold">{item.status}</Text>
                </View>
              </View>
              <Text className="text-blue-400 text-xs mb-2">📅 {item.date}</Text>
              <Text className="text-gray-300 text-sm">{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

export default EventsPage;
