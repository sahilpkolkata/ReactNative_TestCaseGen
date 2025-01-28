import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TestcasePage = () => {
  return (
    <SafeAreaView className='h-full w-full'>
            <LinearGradient
                colors={['#da2fb5', '#f20c2b', '#f63939']} 
                start={{ x: 0, y: 0 }} // Top-left
                end={{ x: 1, y: 1 }}   // Bottom-right
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  
               
              <View className='w-[60rem] h-[20rem] shadow-lg p-4 justify-center items-center bg-white rounded-lg'>
                <Text className='text-gray top-0 mt-8 text-3xl items-right font-semibold absolute'>
                  Generated test cases successfully
                </Text> 
            
                <TouchableOpacity className=' bg-[#8f1eeb] w-[30rem] h-16 rounded-[30px] justify-between items-center flex-row p-4'
                                              onPress={() => {router.push('/')}}>
                                                <FontAwesome className='items-left' name='download' size={24} color='white' />
                                                <View className='flex-1'>
                                                    <Text className='text-center font-[14px] text-white'>Download test cases</Text>
                                                </View>
                                               
                </TouchableOpacity>
              </View>
                
            </LinearGradient>
        </SafeAreaView>   
  )
}

export default TestcasePage