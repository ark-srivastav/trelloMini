import React from "react"
import { Text, TouchableOpacity } from "react-native"
// to populate the cards of the list
export default Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        elevation: 3,
        borderRadius: 3,
        marginVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 5,
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
