import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native"
import BoardFunctions from "./BoardFunctions"
import BoardCard from "./components/BoardCard"

export default Board = ({ navigation }) => {
  const { values, onPress, loading } = BoardFunctions(navigation)
  const width = Dimensions.get("window").width
  const userTag = () => {
    return (
      <View
        style={{
          width: width,
          paddingHorizontal: 15,
          paddingVertical: 13,
          backgroundColor: "#fff",
          borderBottomWidth: 0.4,
          borderColor: "#4D5356",
          marginBottom: 5,
        }}
      >
        <Text style={{ color: "#000" }}>Ark Srivastav's Workspace</Text>
      </View>
    )
  }
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor="#006ba4"
      />
      {userTag()}
      {!loading
        ? values &&
          values.boards &&
          values.boards.map((each) => {
            return (
              <BoardCard onPress={() => onPress(each.id)} boardData={each} />
            )
          })
        : null}
        
    </ScrollView>
  )
}
