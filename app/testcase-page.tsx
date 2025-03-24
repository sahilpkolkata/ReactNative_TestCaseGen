import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useWindowDimensions } from 'react-native'

const TestcasePage = () => {
  const {width, height} = useWindowDimensions()
  return (

          <LinearGradient
                colors={['#da2fb5', '#f20c2b', '#f63939']} 
                start={{ x: 0, y: 0 }} // Top-left
                end={{ x: 1, y: 1 }}   // Bottom-right
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

              <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                    {/* Semi-transparent container */}
                    <View style={[styles.container, {width: width*0.8, maxWidth: 500, maxHeight:400, height: height*0.3}]}>
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
                            <Text className='text-center text-white font-semibold'>
                              Download test cases
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ScrollView>
          </LinearGradient>
        
  )
}

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)'
  }
}

export default TestcasePage