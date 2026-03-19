import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TopSpace from '../components/Fix-UI/TopSpace'
import MapPage from '../components/Maps components/MapPage'


const MapView = () => {
  return (
    <>
      <TopSpace/>
    <ScrollView className='bg-black'>
      <View className='bg-black px-2'>
      <MapPage height={750} width='100%'/>
    </View>

    </ScrollView>
    
    </>
  )
}

export default MapView