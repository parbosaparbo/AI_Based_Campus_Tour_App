import { View, Text,Button, Pressable, Alert } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const ButtonStart = () => {
  return (
    <Pressable
    onPress={()=> Alert.alert("Clicked me")}>
        <Text className='text-black text-center font-bold w-36 text-2xl mx-3 rounded-lg py-2 bg-yellow-500'>Start Tour   <Ionicons name='arrow-forward' size={20}/> </Text>
    </Pressable>
  )
}

export default ButtonStart;