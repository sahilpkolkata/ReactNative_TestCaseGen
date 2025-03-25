import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Entypo from '@expo/vector-icons/Entypo';
import NavigationItem from '@/components/NavigationItem';
import Feather from '@expo/vector-icons/Feather';

const LandingScreen = () => {
  return (
    
      <LinearGradient
        // Background Linear Gradient
        colors={['#9e31ee', '#9612f0','#cfc0db']}
        style={styles.mainContainer}
      >
        
        <ScrollView style={styles.landingContainer}>
            <View style={styles.navbar}>
                <View style={styles.logoContainer}>
                    <Entypo name="rainbow" size={40} color="black" style={styles.logo} />
                    <Text style={{fontSize:30, fontWeight:500}} >nexus</Text>
                </View>
               
                <NavigationItem name="Products"/>
                <NavigationItem name="Use cases"/>
                <NavigationItem name="Login"/>
                
                
            </View>
            <View style={{marginVertical: 30, display:'flex', alignItems:'center'}}>
                <Text style={{fontSize:70, textAlign:'center', fontWeight:500}}>
                Smarter IT. Faster business.
                </Text>
                <Text style={{fontSize:20, textAlign:'center', fontWeight:300}}>
                    Agentic service management platform to modernize ITSM, ESM and enterprise workflows.
                </Text>
            </View>
            <LinearGradient colors={['#ae61e7', '#12f0d9', '#dbc0c0']} style={styles.mainContent}>
                <Text>Hello</Text>
            </LinearGradient>
            <TouchableOpacity style={styles.getStart}>
                <Text style={{fontSize:15, textAlign:'center', fontWeight:700}}>
                    Get Started
                </Text>
                <Feather name="arrow-up-right" size={24} color="black" />
            </TouchableOpacity>
            <View style={{marginVertical: 30, display:'flex', alignItems:'center'}}>
                <Text style={{fontSize:50, textAlign:'center', fontWeight:700}}>
                Built for modern enterprises to drive growth
                </Text>
                <Text style={{fontSize:20, textAlign:'center', fontWeight:300, padding:20}}>
                Deliver enterprise services in the flow of work to where your employees are. Atom, the
                <br/> universal AI Agent, is available on Slack, Teams, email, browser and business apps.
                </Text>
            </View>
            <LinearGradient colors={['#ae61e7', '#12f0d9', '#dbc0c0']} style={styles.secondContent}>
                <Text>Hello</Text>
            </LinearGradient>
        </ScrollView>
     </LinearGradient>
    
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:'100%',
    },
    landingContainer:{
        
    },
    navbar:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height: '20%',
        padding:20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
        position:'relative'
    },
    logoContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        left:10
    },
    mainContent:{
        height:300,
        width: '80%',
        margin: 'auto',
        borderRadius: 20,
        padding: 30
    },
    secondContent:{
        height:500,
        width: '80%',
        margin: 'auto',
        borderRadius: 20,
        padding: 30,
        marginBottom: 40
    },
    logo:{
        margin:10,
        
    },
    getStart:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto',
        marginVertical: 30,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#e93d85',
        width:200,
        borderRadius:10
    }
})