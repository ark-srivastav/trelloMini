import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
export default Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "start",
        backgroundColor:"#fff",
        borderWidth: 1,
        borderRadius:5,
        margin: 5,
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
