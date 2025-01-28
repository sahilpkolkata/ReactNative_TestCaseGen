import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type CustomInputProps = {
    title: string
    value: string
    placeholder: string
    handleChangeText: (text: string) => void
}

const CustomInput = ({title, value, placeholder, handleChangeText}:CustomInputProps) => {
  const [showPassword, setshowPassword] = useState(false)
  return (
    <>
      <Text  className='text-base text-gray-100'>
        Login
      </Text> 
      <View className='w-full h-16 px-4
             bg-black-100 border-2 border-black-200
             rounded-2xl flex-row items-center focus:border-secondary-200'> 
        <TextInput 
         className='flex-1 text-red text-base'
         value={value}
         placeholder={placeholder}
         placeholderTextColor='#7b7b8b'
         onChangeText={handleChangeText}
         secureTextEntry={title ==='Password' && !showPassword}
         />
      {title === 'Password' && (
        <TouchableOpacity onPress={()=> setshowPassword(!showPassword)}>
          <FontAwesome 
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color='#7b7b8b'/>
        </TouchableOpacity>
      )}
      </View>
    </>
     
  )
}

export default CustomInput