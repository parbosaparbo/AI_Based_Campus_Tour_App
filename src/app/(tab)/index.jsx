import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Navbar from '../components/Fix-UI/Navbar';
import TopSpace from '../components/Fix-UI/TopSpace';
import WelcomeCard from '../components/Home-components/WelcomeCard';
import AISearchBox from '../components/Home-components/AISearchBox';
import ShortsLinks from '../components/Home-components/ShortsLinks';
//import {Button} from '@expo/ui/swift-ui'



const index = () => {
  const router = useRouter();
  return (
    <View className='flex-1 bg-gray-900'>
      <TopSpace/>
     <Navbar/>
     <ScrollView>
      <WelcomeCard />
      <AISearchBox />
      <ShortsLinks />
     </ScrollView>
    </View>
  )
}

export default index
