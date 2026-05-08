import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useRouter, useGlobalSearchParams } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

const spotData = {
  "Library": {
    title: "Central Library",
    description: "The Central Library at SITM is the heart of academic resources on campus. It houses tens of thousands of books, technical journals, and e-resources to support research and coursework. The peaceful reading rooms provide an excellent environment for focused study and group discussions.",
    images: [
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
    ]
  },
  "CSE Lab": {
    title: "CSE Laboratory",
    description: "Our state-of-the-art Computer Science & Engineering labs are equipped with high-performance workstations and high-speed internet. Students get hands-on experience with the latest software development tools, AI frameworks, and networking technologies in an immersive environment.",
    images: [
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
    ]
  },
  "Playground": {
    title: "Main Playground",
    description: "The Campus Playground is the central hub for sports and extracurricular activities. Featuring a full-sized football field, cricket pitch, and running track, it's the perfect place to stay fit, unwind after classes, or participate in the annual intra-college tournaments.",
    images: [
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
    ]
  },
  "Boy's Hostel": {
    title: "Boys' Hostel",
    description: "The Boys' Hostel offers comfortable accommodation with modern amenities ensuring a home-away-from-home experience. With 24/7 security, high-speed Wi-Fi, a mess serving nutritious meals, and common recreation rooms, it fosters a vibrant and inclusive student community.",
    images: [
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
      require('../assets/images/wallpaper.webp'),
    ]
  }
};

const SpotDetails = () => {
  const router = useRouter();
  const { title } = useGlobalSearchParams();
  const { width } = Dimensions.get("screen");
  
  // Fallback to library if title is missing or invalid
  const data = spotData[title] || spotData["Library"];

  return (
    <View className="flex-1 bg-black">
      <TopSpace />
      
      {/* Header */}
      <View className="flex-row items-center px-4 mb-4 z-50">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-gray-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">{data.title}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        {/* Photo Gallery */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6 rounded-2xl overflow-hidden">
          {data.images.map((img, idx) => (
            <Image 
              key={idx}
              source={img}
              style={{ width: width - 32, height: 250, marginRight: idx === data.images.length - 1 ? 0 : 10 }}
              resizeMode="cover"
              className="rounded-2xl"
            />
          ))}
        </ScrollView>

        {/* Description Section */}
        <View className="bg-zinc-900 p-5 rounded-3xl border border-zinc-800 shadow-xl mb-10">
          <Text className="text-white text-3xl font-extrabold mb-3">About {title}</Text>
          <Text className="text-gray-300 text-base leading-7">
            {data.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default SpotDetails;
