import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import CustomInput from '@/components/CustomInput'

const Login = () => {
    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: ''
    })

  return (
        <LinearGradient
                    colors={['#8b5cf6', '#d946ef']} // Violet to Fuchsia
                    start={{ x: 0, y: 0 }} // Top-left
                    end={{ x: 1, y: 1 }}   // Bottom-right
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View className='w-80 h-60 shadow-lg p-4 justify-center bg-white rounded-lg'>
            <CustomInput 
                title='Email' 
                value={loginDetails.email} 
                placeholder='email' 
                handleChangeText={(text) => setLoginDetails({...loginDetails, email: text})}/>
            <Text>Password</Text>
                <TextInput value={loginDetails.password} placeholder='password'></TextInput>
            <TouchableOpacity className='mt-10 bg-violet-400 rounded-md shadow-sm text-center p-1' 
                              onPress={() => {router.push('/')}}><Text>Login</Text></TouchableOpacity>
          </View>

        </LinearGradient>
        
        
   
  )
}

export default Login