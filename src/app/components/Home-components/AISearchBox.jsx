import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const AISearchBox = () => {
  return (
    <View className=' w-full px-7 py-3  bg-red-100'>
        <View className='px-10 py-4 rounded-2xl bg-slate-500'>
        <ImageBackground
        source={require("../../../assets/images/college.jpg")}
        className='flex-1 justify-center items-center rounded-3xl'
        >
        <Text className='text-2xl py-10'>Campus Tour</Text>
        </ImageBackground>
      </View> 
    </View>
  )
}

export default AISearchBox;