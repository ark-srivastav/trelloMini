import React from "react"
import { View, TouchableOpacity, Text } from "react-native"

// to populate the card which asks to add list (present at the end of the list)
export default AddList = ({ height, width }) => {
  return (
    <View
      key="addList"
      style={{
        width: width,
        minHeight: height / 10,
        maxHeight: height / 3,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity disbled={true}>
        <Text style={{ color: "#9ae18a", fontWeight: "bold" }}> Add List </Text>
      </TouchableOpacity>
    </View>
  )
}
