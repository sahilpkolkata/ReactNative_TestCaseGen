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
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<View className="w-full h-[200px] justify-center items-center">
      {/* Semi-transparent container */}
      <View className="w-[60%] h-full bg-white/50 rounded-lg shadow-lg">
        {/* Fully opaque content */}
        <View className="w-full h-full p-4 justify-center items-center">
          <Text className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Generated test cases successfully
          </Text>

          <TouchableOpacity
            className="bg-[#8f1eeb] w-4/5 h-12 rounded-[30px] flex-row justify-between items-center px-4 active:opacity-90"
            onPress={() => router.push('/')}
          >
            <FontAwesome name="download" size={24} color="white" />
            <View className="flex-1">
              <Text className="text-white text-center text-base">
                Download test cases
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </LinearGradient>
        </SafeAreaView>   
  )
}

export default TestcasePage