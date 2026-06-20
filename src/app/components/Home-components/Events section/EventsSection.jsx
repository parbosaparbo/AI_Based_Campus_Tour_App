import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from '../../../apiConfig'

const EventsSection = () => {
  const [events, setEvents] = useState([]);

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
    <View className="mx-4 my-6">
      <Text className="text-white text-xl font-bold mb-4">Events</Text>
      {events.length === 0 ? (
        <Text className="text-gray-400">Loading events...</Text>
      ) : (
        events.map((item, index) => (
          <View key={index} className="bg-zinc-800 rounded-2xl p-4 mb-4 border-l-4 border-blue-500">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-white text-lg font-bold flex-1">{item.title}</Text>
              <View className={`px-2 py-1 rounded ${item.status === 'Past' ? 'bg-gray-600' : 'bg-green-600'}`}>
                <Text className="text-white text-[10px] font-bold">{item.status}</Text>
              </View>
            </View>
            <Text className="text-blue-400 text-xs mb-2">📅 {item.date}</Text>
            <Text className="text-gray-300 text-sm">{item.description}</Text>
          </View>
        ))
      )}
    </View>
  )
}

export default EventsSection;
