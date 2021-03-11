import React from "react"
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native"
export default BoardCard = ({ onPress, boardData }) => {
  const width = Dimensions.get("window").width
  return (
    <TouchableOpacity onPress={onPress} key={boardData.id + "23749"}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 5,
          borderRadius: 5,
          width: width,
        }}
      >
        <View
          style={{
            height: 43,
            width: 40,
            borderRadius: 3,
            backgroundColor: boardData.color,
            marginHorizontal: 15,
          }}
        />

        <Text style={{ color: "#000", fontSize: 16, paddingHorizontal: 0 }}>
          {boardData.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
