import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const NavigationItem = ({name}:{name:string}) => {
  return (
    <View style={name==='Login' ? styles.loginButton : styles.itemContainer}>
      <Text style={[styles.itemText, name==='Login' && {color: '#edb9b9'}]}>{name}</Text>
      {
        (name !== 'Home' && name !== 'Login') && 
        <AntDesign style={{marginTop:1}} name="down" size={16} color="black" />
      }
    </View>
  )
}

export default NavigationItem

const styles = StyleSheet.create({
    itemContainer:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        boxShadow: '0 4px 6px 0 rgba(237,185,185,1)',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
        marginRight: 20,
        position: 'relative',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        left: 200
    },
    itemText:{
        fontSize: 15,
        fontWeight: 700,
        textAlign:'center',
        marginRight: 5
    },
    loginButton:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        boxShadow: '0 4px 6px 0 #b764f4',
        backgroundColor: 'rgba(85,9,173,1)',
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 'auto',
       // backgroundColor: '#5509ad',
    }
})