import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack"
import React from "react"
import Boards from "./Screens/Boards"
import List from "./Screens/List"
import Details from "./Screens/Details"
export default function App() {
  const Navigator = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator.Navigator>
        <Navigator.Screen
          name="Boards"
          component={Boards}
          options={{
            title: "Boards",
            headerStyle: {
              backgroundColor: "#0079bd",
            },
            headerTintColor: "#fff",
          }}
        />
        <Navigator.Screen
          name="List"
          component={List}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#0079bd",
            },
            headerTintColor: "#fff",
          }}
        />
        <Navigator.Screen
          name="Details"
          component={Details}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
              elevation: 0,
            },
            headerTintColor: "#000",
          }}
        />
      </Navigator.Navigator>
    </NavigationContainer>
  )
}
