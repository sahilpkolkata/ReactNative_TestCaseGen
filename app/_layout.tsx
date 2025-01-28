
import { Stack } from 'expo-router';
import React from 'react';
import "../global.css";
import { StatusBar } from 'react-native';



export default function RootLayout() {
  
  return (
    <>
      <Stack >
      <Stack.Screen name='index' options={
        {headerShown: false}
      }/>
      <Stack.Screen name='post-upload' options={
        {headerShown: false}
      }/>
       <Stack.Screen name='testcase-page' options={
        {headerShown: false}
      }/>
      <Stack.Screen name='(auth)' options={
        {headerShown: false}
      }/>
    </Stack>
    </>
    
  );
}
