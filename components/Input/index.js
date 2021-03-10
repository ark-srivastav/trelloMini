import React from "react"
import { View, TextInput } from "react-native"
export default Input = ({ value, placeholder, onChangeText }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}
