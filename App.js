import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input } from './components';
import Boards from './Screens/Boards';

export default function App() {
  const [value, setValue]=useState("")
  const onChangeText=(text)=>{
    setValue(text)
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Input value={value}
      placeholder="woo"
      onChangeText={onChangeText}
      />
      <StatusBar style="auto" />
    </View>
    <Boards/>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

