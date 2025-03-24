import { View, Text, StyleSheet, ScrollView, useWindowDimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router, Redirect } from 'expo-router';

import * as DocumentPicker from 'expo-document-picker';



const UploadComponent = () => {
  const {width, height} = useWindowDimensions()
  const [files, setFiles] = useState([]);

  const handleUpload = () => {
    try{
      if (files.length > 0) {
        router.navigate({
          pathname: "/post-upload",
          params: {files: files.map(f=> f.name)}
        });
      }
    }catch(error){
        alert('Please upload a file');
      }
  };


  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
      multiple: true
    });
    console.log(result.assets)

    if (!result.canceled) {
      setFiles(result.assets);
      
    } else {
      alert('Error: No file selected');
    }
  };

  

  const deleteUploadedFile = (f:Object)=>{
    const updatedFiles = files.filter(file => file.name !== f.name)
    setFiles(updatedFiles)
  }

  return (
    <View style={[styles.container,{width: width*0.8, maxWidth:550}]}>
      {/* Centered Upload Text */}
      {files.length === 0 && (
        <View style={styles.uploadTextWrapper}>
          <Text style={styles.uploadText} onPress={pickDocument}>
            Click here to upload files
          </Text>
        </View>
      )}

      {/* Scrollable file list */}
      <ScrollView contentContainerStyle={styles.fileList} horizontal={false}>
        {files?.map((f, i) => (
          <View style={styles.fileContainer} key={i}>
            <Text numberOfLines={1} style={styles.fileName}>{f.name}</Text>
            <FontAwesome onPress={()=>deleteUploadedFile(f)} name="trash" size={20} color="red" />
          </View>
        ))}
      </ScrollView>

      {/* Upload Icon - Fixed to the right */}
      {files.length > 0 && (
        <FontAwesome
          style={styles.uploadButton}
          onPress={handleUpload}
          name="upload"
          size={28}
          color="purple"
        />
      )}
      <TextInput numberOfLines={3} style={{height:30}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10, 
    // boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 2 },
    position: 'relative',
    justifyContent: 'center', // Ensures centering when empty
    
  },
  uploadTextWrapper: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 30
  },
  uploadText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  fileList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 8,
    margin: 4,
    maxWidth: '45%', // Prevents overflowing
  },
  fileName: {
    marginRight: 8,
    flexShrink: 1, // Ensures text does not overflow
  },
  uploadButton: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -12 }], // Centers vertically
  },
});

export default UploadComponent;