import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'

const UploadComponent = () => {
  return (
    <View className='w-[35rem] h-20 m-2 shadow-lg p-6 flex-row justify-between bg-white rounded-2xl'>
    <Text className='text-center'>Upload</Text>
    <FontAwesome className='items-right' 
                onPress={() => router.push('/post-upload')}
                name='upload' size={24} 
                color='purple' 
                style={{ opacity: 0.4 }} />
</View>
  )
}

export default UploadComponent