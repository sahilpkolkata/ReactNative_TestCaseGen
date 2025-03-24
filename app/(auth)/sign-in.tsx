import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import CustomInput from '@/components/CustomInput'
// import { UserManager, UserManagerSettings } from 'oidc-client-ts'


 
const Login = () => {
    const { width, height } = useWindowDimensions()
    
    const [loginDetails, setLoginDetails] = React.useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState()

    // const oidcConfig:UserManagerSettings = {
    //   authority: "http://localhost:4000/realms/react_test",
    //   client_id: "genai_client",
    //   redirect_uri: "https://localhost:4000/",
    //   scope: 'openid profile email offline_access',
    // }



  const handleLogin = async ()=>{
    const loginResponse = await fetch('http://localhost:4000/realms/react_test/protocol/openid-connect/token',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        ...loginDetails,
        client_id: "genai_client",
        grant_type: 'password'
      })

    })
    .then(res=> res.json())

    if(loginResponse.error){
      setError(loginResponse.error_description)
    }
    

    console.log(loginResponse)
    
    sessionStorage.setItem('accessToken',loginResponse.access_token)
    sessionStorage.setItem('refreshToken',loginResponse.refresh_token)
    router.push('/')
  }

   

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
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems:'center'}}>
              <View style={[styles.loginContainer, {width: width*0.85, maxWidth:560 }]}>
                <Text className='text-black text-3xl font-bold mb-8 text-center'>Login</Text>
                <CustomInput 
                    title='Email' 
                    value={loginDetails.username} 
                    handleChangeText={(text) => setLoginDetails({...loginDetails, username: text})}/>
                <CustomInput
                    title='Password'
                    value={loginDetails.password}
                    
                    handleChangeText={(text) => setLoginDetails({...loginDetails, password: text})}/>
                {error && <Text className='mt-2 pt-2 text-red-400 text-center text-[16px]'>{error}</Text>}
                
                <TouchableOpacity style={styles.loginButton}
                                  onPress={handleLogin}>
                                    <Text style={{fontSize: 18, color: 'white'}}>Login</Text>
                </TouchableOpacity>
              </View>

            </ScrollView>
         

        </LinearGradient>
   
  )
}

const styles = StyleSheet.create({
  loginContainer : {
  
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