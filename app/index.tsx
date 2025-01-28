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
            colors={['#8b5cf6', '#d946ef']} // Violet to Fuchsia
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }}   // Bottom-right
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text className='text-blue-400 mb-12'>Welcome to Home</Text>
                <Link href={'/sign-in'}>Login</Link>    
            <View className='w-[35rem] h-20 m-2 shadow-lg p-6 flex-row justify-between bg-white rounded-2xl'>
                <Text className='text-center'>Upload</Text>
                <FontAwesome className='items-right' name='upload' size={24} color='black' />
            </View>
            <View className='m-12 flex-row justify-evenly'>
                <Cards stats={13} desc='Test cases ran'/>
                <Cards stats={13} desc='Test cases ran'/>
                <Cards stats={13} desc='Test cases ran'/>
            </View>
            
        </LinearGradient>
    </SafeAreaView>
  )
}

export default HomeScreen