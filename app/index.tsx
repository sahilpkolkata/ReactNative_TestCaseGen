import { View, Text, ScrollView, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import Cards from '@/components/Cards'
import UploadComponent from '@/components/UploadComponent'





const HomeScreen = () => {



  return (
        <LinearGradient
            colors={['#da2fb5', '#f20c2b', '#f63939']} 
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }}   // Bottom-right
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            className='flex-1 justify-center items-center'>
            <Link href={'/sign-in'}>Login</Link> 
            <Link href={'/landing'}>Landing</Link> 
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text className='text-white mb-8 text-3xl items-right font-bold'>
                Good Morning Sahil
                {/* <Link href={'/chat'}>Login</Link>  */}
            </Text>
             
                <UploadComponent/>
                
            
            <View className='m-12 sm:flex-col lg:flex-row justify-evenly'>
                <Cards stats={2} desc='Chats initiated by you'/>
                <Cards stats={10} desc='Test cases generated'/>
                <Cards stats={10} desc='Test cases generated'/>
            </View>

            </ScrollView>
            
        </LinearGradient>
  )
}

export default HomeScreen