import { View, Text, ImageBackground, } from 'react-native'
import React from 'react'
import ButtonStart from '../Fix-UI/ButtonStart'

const AISearchBox = () => {
  return (
    <View className='mx-4'>
        <View className=' rounded-2xl bg-slate-500 overflow-hidden'>
        <ImageBackground
        source={require("../../../assets/images/wallpaper.webp")}
        resizeMode='cover'
        className='h-44 rounded-3xl'
        >
        <Text className='text-3xl py-2 px-4 font-extrabold'>Campus Tour</Text>
        <View className='flex my-14'>
        <ButtonStart/>

        </View>
        </ImageBackground>
      </View> 
    </View>
  )
}

export default AISearchBox;