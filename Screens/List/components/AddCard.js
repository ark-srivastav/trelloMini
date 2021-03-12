import React from "react"
import { TouchableOpacity, Text } from "react-native"
export default AddCard = ({
    onPress,
    text
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: "#9ae18a", fontWeight:"bold" }}> {text} </Text>
    </TouchableOpacity>
  )
}
