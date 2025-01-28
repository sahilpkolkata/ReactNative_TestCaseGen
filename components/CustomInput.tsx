import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type CustomInputProps = {
    title: string
    value: string
    placeholder?: string
    handleChangeText: (text: string) => void
}

const CustomInput = ({title, value, placeholder, handleChangeText}:CustomInputProps) => {
  const [showPassword, setshowPassword] = useState(false)
  return (
    <>
      <Text style={styles.title}>
        {title}
      </Text> 
      <View style={styles.inputContainer}> 
        <TextInput 
         style={styles.inputText}
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

const styles = StyleSheet.create({
  title:{
    fontSize: 16,
    lineHeight: 24,
  },
  inputContainer: {
    width: '100%',
    marginTop: 4,
    marginBottom: 4,
    height: 56,
    padding: 16,
    backgroundColor: 'black-100',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black-200',
  },
  inputText: {
    flex: 1,
    color: 'black-100',
    fontSize: 16,
    lineHeight: 24,
    height: 56,
  }
 
})

export default CustomInput