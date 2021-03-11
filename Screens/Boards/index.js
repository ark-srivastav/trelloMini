import React from "react"
import { View, ScrollView, TouchableOpacity, Text } from "react-native"
import BoardFunctions from "./BoardFunctions"

export default Board = () => {
  const { values, onPress, loading } = BoardFunctions()
  const boards = (boardData) => {
  const abc=(index)=>onPress(index)
    return (
      <View
        style={{ marginVertical: 15, backgroundColor: "pink", width: 100 }}
        key={boardData.id + "23749"}
      >
        <TouchableOpacity onPress={abc}>
          <Text>{boardData.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View>
      {!loading
        ? values.boards.map((each) => {
            return boards(each)
          })
        : null}
    </View>
  )
}
