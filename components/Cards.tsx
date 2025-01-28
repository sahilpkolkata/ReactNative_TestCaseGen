import { View, Text,  } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'

const Cards = ({stats, desc}:{stats: number, desc: string}) => {
  return (
    <>
{/* <View className="w-48 h-32 bg-red-400 rounded-xl m-2 p-4 flex-row justify-center items-center">
        <Text className="font-bold text-4xl">{stats}</Text>
    <View className="flex-1 h-20 m-2 justify-center">
        <Text className="font-semibold text-md text-center">{desc}</Text>
    </View>
</View> */}
<View style={styles.card}>
    <Text style={styles.text}>{stats}</Text>
    <View>
        <Text style={styles.descText}>{desc}</Text>
    </View>
</View>
</>
  )
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 60,
        color: 'gray'
    },
    descText:{
        fontWeight: 200,
        fontSize: 15,
        textAlign: 'center',
        color: 'gray'
    }
})


export default Cards