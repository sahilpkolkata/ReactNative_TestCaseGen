import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

import FontAwesome from '@expo/vector-icons/FontAwesome';

const PostUpload = () => {
  const { files } = useLocalSearchParams()
  const {width, height} = useWindowDimensions()
  const filesArr = typeof files === 'string' ? files.split(',') : files
  const fileCount = filesArr?.length || 0
  return (
        <LinearGradient
            colors={['#da2fb5', '#f20c2b', '#f63939']} 
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }}   // Bottom-right
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              
           <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.container, {width: width*0.8, maxWidth: 500, maxHeight:500, height: height*0.4}]}>

              <View style={styles.innerContainer}>
               
               <Text style={styles.title}>
                
                  {fileCount}{filesArr?.length === 1 ? ' file' : ' files' } have been successfully uploaded

                </Text> 
              
                <ScrollView
                  showsVerticalScrollIndicator={false} 
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={[styles.fileList, {flexDirection: fileCount >3 ? 'column' : 'row'}]}>
                    {
                      filesArr?.map((file, index) => (
                        <View key={index} style={[styles.fileNameContainer, {width: width*0.3, maxWidth: 300, }]}>
                          <Text style={ {textAlign: 'center'}}>{file}</Text>
                        </View>
                      ))
                    }
                    {!filesArr?.length && 
                        <View style={[styles.fileNameContainer, {width: width*0.2, maxWidth: 300, }]}>
                          <Text className='text-center'>No File uploaded</Text>
                        </View>}
                  </ScrollView>
                <TouchableOpacity style={[styles.textcaseButton, {width: width*0.6, maxWidth: 400}]}
                                              onPress={() => {router.push('/testcase-page')}}>
                                                <Text style={{fontSize: 12, color: 'white', textAlign:'center'}}>GENERATED TEST CASES</Text>
                </TouchableOpacity>
              </View>
                
              </View>
           </ScrollView>
          
            
        </LinearGradient>
         
  )
}

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    padding: 8,
    marginTop: 8,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    // alignSelf: 'stretch'
  },
  fileList: {
    margin: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // maxHeight: 200,
    paddingBottom:  20,

  },
  fileNameContainer: {
    margin: 8,
    padding: 8,
    borderRadius: '6px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)'
  },
  textcaseButton: {
    backgroundColor: '#8f1eeb',
    borderRadius: '6px',
    padding: 16,
    paddingHorizontal: 16,
  },
 
}

export default PostUpload