import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const PostUpload = () => {
  return (
    <SafeAreaView className='h-full w-full'>
        <LinearGradient
            colors={['#da2fb5', '#f20c2b', '#f63939']} 
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }}   // Bottom-right
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              
           
          <View className='w-[60rem] h-[20rem] shadow-lg p-4 justify-center items-center bg-white rounded-lg'>
            <Text className='text-gray top-0 mt-8 text-3xl items-right font-bold absolute'>
              2 files have been successfully uploaded
            </Text> 
            
            <View className='m-8 flex-row justify-evenly'>
              <View className='w-[24rem] h-8 m-2 shadow-lg p-6 justify-center items-center bg-white rounded-2xl'>
                <Text className='text-center'>File 1</Text>
              </View>
              <View className='w-[24rem] h-8 m-2 shadow-lg p-6 justify-center items-center bg-white rounded-2xl'>
                <Text className='text-center'>File 2</Text>
              </View>
            </View>
            <TouchableOpacity className=' bg-[#8f1eeb] w-96 rounded-2xl p-4 justify-center items-center'
                                          onPress={() => {router.push('/testcase-page')}}>
                                            <Text style={{fontSize: 12, color: 'white'}}>GENERATED TEST CASES</Text>
            </TouchableOpacity>
          </View>
            
        </LinearGradient>
    </SafeAreaView>            
  )
}

export default PostUpload