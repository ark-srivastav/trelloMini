import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Input } from "./components"
import Boards from "./Screens/Boards"
import List from "./Screens/List"

export default function App() {
  const Navigator = createStackNavigator()
  const [value, setValue] = useState("")
  const onChangeText = (text) => {
    setValue(text)
  }
  const x = ({ navigation }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <Input value={value} placeholder="woo" onChangeText={onChangeText} />
          <TouchableOpacity onPress={() => navigation.navigate("Boards")}>
            <Text>hello</Text>
          </TouchableOpacity>
          <StatusBar style="auto" barStyle="light-content" backgroundColor="#000000"/>
        </View>
        {/* <Boards /> */}
      </ScrollView>
    )
  }
  return (
    <NavigationContainer>
      <Navigator.Navigator>
        <Navigator.Screen
          name="Boards"
          component={Boards}
          options={{
            title:"Boards",
            headerStyle: {
              backgroundColor: "#0079bd",
            },
            headerTintColor: "#fff"
          }}
        />
        <Navigator.Screen name="Home" component={x} />
        <Navigator.Screen
          name="List"
          component={List}
          options={{
            title:"",
            headerStyle: {
              backgroundColor: "#0079bd",
            },
            headerTintColor: "#fff"
          }}
        />
      </Navigator.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
