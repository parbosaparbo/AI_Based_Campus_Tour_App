import { View, Text,ImageBackground, Alert } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const DirectClick = () => {
    const features = [
        {
            title: "Library",
            bg: require('../../../../assets/images/wallpaper.webp'),
            desc:"Central library with 1000's of Boooks.",
        },
        {
            title:"CSE Lap",
            bg: require("../../../../assets/images/wallpaper.webp"),
            desc:"cse lap for students here to work withaejh e",
        },
        {
            title: "Library",
            bg: require('../../../../assets/images/wallpaper.webp'),
            desc:"Central library with 1000's of Boooks.",
        },
        {
            title:"CSE Lap",
            bg: require("../../../../assets/images/wallpaper.webp"),
            desc:"cse lap for students here to work withaejh e",
        },
    ]
  return (
    <Pressable onPress={()=> Alert.alert("Press it.")}>
        <View className=" flex mx-4 my-6">
            {features.map((item, index)=>(
                <View className='my-4'>
                    <ImageBackground
                    source={item.bg}
                    resizeMode='cover'
                    className="h-32 rounded-t-3xl"
                    >
                        <Text className='text-xl font-extrabold px-5 py-2'>{item.title}</Text>

                    </ImageBackground>
                    <Text className='text-white bg-zinc-800 rounded-b-xl px-5 py-3'>{item.desc}</Text>
                </View>
            ))}
        </View>
    </Pressable>
  )
}

export default DirectClick