import { View, Text, TouchableOpacity, ScrollView, TextInput, Linking } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

const faqs = [
  { question: "How do I use the interactive map?", answer: "Navigate to the Map tab and pinch to zoom. Tap on any marker to see details about the building." },
  { question: "How does the AI Assistant work?", answer: "Open the ChatBot tab and type your destination. The AI will provide step-by-step directions and draw a route on the map for you." },
  { question: "Can I save my favorite locations?", answer: "Yes! Tap the heart icon on any location to save it to your Favorites page for quick access." },
  { question: "Why is the map not loading?", answer: "Ensure you are connected to the campus Wi-Fi or have a stable cellular connection. The map requires internet access to fetch live coordinates." },
];

const HelpSupportPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactIT = () => {
    Linking.openURL('mailto:itdesk@sitm.edu.in?subject=Campus Tour App Support');
  };

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />
      
      {/* Header */}
      <View className="flex-row items-center mb-6 z-50 mt-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-zinc-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Help & Support</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Search Bar */}
        <View className="bg-zinc-900 flex-row items-center rounded-2xl px-4 py-3 mb-6 border border-zinc-800">
          <Ionicons name="search" size={20} color="#9ca3af" />
          <TextInput 
            className="flex-1 text-white ml-3 text-base"
            placeholder="Search for help..."
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* FAQs Section */}
        <Text className="text-gray-400 font-bold mb-4 ml-2 uppercase text-xs tracking-wider">Instructions & FAQ</Text>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <View key={index} className="bg-zinc-900 rounded-2xl p-4 mb-4 border border-zinc-800">
              <Text className="text-white font-bold text-lg mb-2">{faq.question}</Text>
              <Text className="text-gray-400 text-sm leading-6">{faq.answer}</Text>
            </View>
          ))
        ) : (
          <Text className="text-gray-500 text-center my-6">No matching instructions found.</Text>
        )}

        {/* IT Desk Contact */}
        <Text className="text-gray-400 font-bold mt-6 mb-4 ml-2 uppercase text-xs tracking-wider">Contact Us</Text>
        <TouchableOpacity 
          className="bg-blue-600/20 rounded-3xl p-5 border border-blue-500/30 flex-row items-center mb-10"
          onPress={handleContactIT}
        >
          <View className="bg-blue-500 p-3 rounded-full mr-4">
            <Ionicons name="headset" size={28} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-white text-lg font-bold">Campus IT Desk</Text>
            <Text className="text-blue-400 text-sm mt-1">itdesk@sitm.edu.in</Text>
          </View>
          <Ionicons name="mail" size={24} color="#3b82f6" />
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

export default HelpSupportPage;
