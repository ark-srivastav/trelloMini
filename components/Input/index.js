import React from "react"
import { View, TextInput } from "react-native"
export default Input = ({ value, placeholder, onChangeText ,color}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder?placeholder:"Enter text here"}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid={color}
      />
    </View>
  )
}
