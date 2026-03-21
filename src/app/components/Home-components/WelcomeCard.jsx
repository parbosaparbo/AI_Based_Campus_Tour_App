import { View, Text } from 'react-native'
import React from 'react'
import SearchBox from '../Maps components/SearchBox'


const WelcomeCard = () => {
  return (
    <View className='w-full px-4 py-3 bg-gray-900'>
      <Text className='text-3xl font-bold text-white'>Welcome to our Campus Tour!</Text>
      <Text className='text-lg text-white'>Explore out campus. Discover our facilities, events and more...</Text>
      <SearchBox />
    </View>
  )
}

export default WelcomeCard;