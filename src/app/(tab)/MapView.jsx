import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import TopSpace from '../components/Fix-UI/TopSpace'
import MapPage from '../components/Maps components/MapPage'



const MapView = () => {
  const {height, width} = Dimensions.get("screen")
  return (
    <>
      <TopSpace/>
    <ScrollView className='bg-black'>
      <View className='bg-black px-2'>
      <MapPage height={height} width={width}/>
    </View>

    </ScrollView>
    
    </>
  )
}

export default MapView