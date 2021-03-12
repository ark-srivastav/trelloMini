import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
export default Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor:"#fff",
        elevation:3,
        borderRadius:3,
        marginVertical: 8,
        paddingHorizontal:10,
        marginHorizontal:5

      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
