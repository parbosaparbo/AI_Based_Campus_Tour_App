import { View, Text, ImageBackground, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const DirectClick = () => {
    const router = useRouter();
    const features = [
        {
            title: "Library",
            bg: require('../../../../assets/images/wallpaper.webp'),
            desc:"Central library with 1000's of Books.",
        },
        {
            title:"CSE Lab",
            bg: require("../../../../assets/images/wallpaper.webp"),
            desc:"CSE lab for students to work and study.",
        },
        {
            title: "Playground",
            bg: require('../../../../assets/images/wallpaper.webp'),
            desc:"Main sports and recreation area.",
        },
        {
            title:"Boy's Hostel",
            bg: require("../../../../assets/images/wallpaper.webp"),
            desc:"Student accommodation facility.",
        },
    ]
  return (
        <View className="flex mx-4 my-6">
            <Text className="text-white text-xl font-bold mb-4">Popular Spots</Text>
            {features.map((item, index)=>(
                <TouchableOpacity 
                    key={index} 
                    className='my-4 rounded-3xl overflow-hidden shadow-lg elevation-5'
                    onPress={() => router.push(`/SpotDetails?title=${encodeURIComponent(item.title)}`)}
                >
                    <ImageBackground
                    source={item.bg}
                    resizeMode='cover'
                    className="h-32"
                    >
                        <Text className='text-xl font-extrabold px-5 py-2 text-white bg-black/40 self-start mt-2 ml-2 rounded-lg'>{item.title}</Text>

                    </ImageBackground>
                    <Text className='text-white bg-zinc-800 px-5 py-3'>{item.desc}</Text>
                </TouchableOpacity>
            ))}
        </View>
  )
}

export default DirectClick