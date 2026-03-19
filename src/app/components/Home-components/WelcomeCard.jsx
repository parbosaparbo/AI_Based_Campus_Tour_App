import { View, Text } from 'react-native'
import React from 'react'


const WelcomeCard = () => {
  return (
    <View className='w-full px-7 py-3 bg-pink-400'>
      <Text className='text-2xl font-bold'>Welcome to our Campus Tour!</Text>
      <Text className='text-xl'>Explore out campus. Discover our facilities, events and more...</Text>
      {/* <SearchBox /> */}
    </View>
  )
}

export default WelcomeCard;