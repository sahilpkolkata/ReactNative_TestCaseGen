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
                    colors={['#da2fb5', '#f20c2b', '#f63939']}
                    start={{ x: 0, y: 0 }} // Top-left
                    end={{ x: 1, y: 1 }}   // Bottom-right
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <View className='mb-8'>
              <Text className='text-black text-3xl font-bold '>Login</Text>
            </View>           */}
            {/* <View className='w-80 h-60 shadow-lg p-4 justify-center bg-white rounded-lg'> */}
          <View style={styles.loginContainer}>
          <Text className='text-black text-3xl font-bold mb-8 text-center'>Login</Text>
            <CustomInput 
                title='Email' 
                value={loginDetails.email} 
                
                handleChangeText={(text) => setLoginDetails({...loginDetails, email: text})}/>
            <CustomInput
                title='Password'
                value={loginDetails.password}
                
                handleChangeText={(text) => setLoginDetails({...loginDetails, password: text})}/>
            
            <TouchableOpacity style={styles.loginButton}
                              onPress={() => {router.push('/')}}>
                                <Text style={{fontSize: 18, color: 'white'}}>Login</Text>
            </TouchableOpacity>
          </View>

        </LinearGradient>
   
  )
}

const styles = StyleSheet.create({
  loginContainer : {
    width: 560,
    height: 400,
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    zIndex: 0
  },
  loginButton:{
    marginTop: 20,
    backgroundColor: '#8f1eeb',
    borderRadius: 24,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login