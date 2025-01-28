import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import Cards from '@/components/Cards'


const HomeScreen = () => {
  return (
    <SafeAreaView className='h-full w-full'>
        <LinearGradient
            colors={['#da2fb5', '#f20c2b', '#f63939']} 
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }}   // Bottom-right
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Link href={'/sign-in'}>Login</Link> 
            <Text className='text-white mb-8 text-3xl items-right font-bold'>
                Good Morning Sahil
            </Text>
                   
            <View className='w-[35rem] h-20 m-2 shadow-lg p-6 flex-row justify-between bg-white rounded-2xl'>
                <Text className='text-center'>Upload</Text>
                <FontAwesome className='items-right' 
                            onPress={() => router.push('/post-upload')}
                            name='upload' size={24} 
                            color='purple' 
                            style={{ opacity: 0.4 }} />
            </View>
            <View className='m-12 flex-row justify-evenly'>
                <Cards stats={2} desc='Chats initiated by you'/>
                <Cards stats={10} desc='Test cases generated'/>
                <Cards stats={10} desc='Test cases generated'/>
            </View>
            
        </LinearGradient>
    </SafeAreaView>
  )
}

export default HomeScreen