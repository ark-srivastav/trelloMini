import React from "react"
import { View, TextInput } from "react-native"
export default Input = ({ value, placeholder, onChangeText ,color, width}) => {
  return (
    <View style={{justifyContent:"center", alignItems:"center"}}>
      <TextInput
        placeholder={placeholder?placeholder:"Enter text here"}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid={color}
        style={{width:width && width*0.70}}
      />
    </View>
  )
}
