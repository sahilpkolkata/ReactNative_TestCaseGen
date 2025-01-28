import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
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

          {/* <View className='w-80 h-60 shadow-lg p-4 justify-center bg-white rounded-lg'> */}
          <View style={styles.loginContainer}>
            <CustomInput 
                title='Email' 
                value={loginDetails.email} 
                placeholder='email' 
                handleChangeText={(text) => setLoginDetails({...loginDetails, email: text})}/>
            <CustomInput
                title='Password'
                value={loginDetails.password}
                placeholder='password'
                handleChangeText={(text) => setLoginDetails({...loginDetails, password: text})}/>
            
            <TouchableOpacity style={styles.loginButton}
                              onPress={() => {router.push('/')}}><Text>Login</Text></TouchableOpacity>
          </View>

        </LinearGradient>
   
  )
}

const styles = StyleSheet.create({
  loginContainer : {
    width: 400,
    height: 280,
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8
  },
  loginButton:{
    marginTop: 40,
    backgroundColor: 'violet-400',
    borderRadius: 4,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login