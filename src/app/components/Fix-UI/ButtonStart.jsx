import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ButtonStart = () => {
  const router = useRouter();

  const handlePress = () => {
    Alert.alert(
      "Start Tour",
      "How would you like to explore the campus?",
      [
        {
          text: "🗺️ Interactive Map",
          onPress: () => router.push('/MapView')
        },
        {
          text: "🤖 AI Assistant",
          onPress: () => router.push('/ChatBot')
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  };

  return (
    <Pressable onPress={handlePress}>
        <Text className='text-black text-center font-bold w-36 text-xl mx-3 rounded-lg py-2 bg-yellow-500'>
          Start Tour   <Ionicons name='arrow-forward' size={20}/> 
        </Text>
    </Pressable>
  )
}

export default ButtonStart;