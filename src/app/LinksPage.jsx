import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

const LinksPage = () => {
  const router = useRouter();

  const links = [
    {
      title: "College Website",
      desc: "Official website of SITM",
      icon: "globe-outline",
      color: "#3b82f6", // blue-500
      url: "https://www.sitmguwahati.ac.in/", // websites links
    },
    {
      title: "Instagram",
      desc: "Follow our official page",
      icon: "logo-instagram",
      color: "#ec4899", // pink-500
      url: "https://www.instagram.com/sitmguwahati/?hl=en", // insta links
    },
    {
      title: "YouTube",
      desc: "Watch campus tours and events",
      icon: "logo-youtube",
      color: "#ef4444", // red-500
      url: "http://www.youtube.com/@sitmguwahati", // youtube links
    },
    {
      title: "Facebook",
      desc: "Join our community",
      icon: "logo-facebook",
      color: "#2563eb", // blue-600
      url: "https://www.facebook.com/sitmguwahati1", // fb links
    },
  ];

  const handleOpenLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open this URL: " + url);
    }
  };

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />

      {/* top header with back button at left top */}
      <View className="flex-row items-center mb-6 z-50">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-gray-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Important Links</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {links.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-zinc-800 rounded-2xl p-4 mb-4 flex-row items-center border border-zinc-700"
            onPress={() => handleOpenLink(item.url)}
          >
            <View className="bg-zinc-900 p-3 rounded-full mr-4">
              <Ionicons name={item.icon} size={28} color={item.color} />
            </View>
            <View className="flex-1">
              <Text className="text-white text-lg font-bold">{item.title}</Text>
              <Text className="text-gray-400 text-sm mt-1">{item.desc}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default LinksPage;
