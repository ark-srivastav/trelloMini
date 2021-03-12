import React from "react"
import { View } from "react-native"
import { Input } from "../../../components"

export default InputComponent = ({
    value,
    onChangeText,
    placeholder,

}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 3,
        borderRadius: 3,
        marginVertical: 8,
        paddingHorizontal: 10,
        marginHorizontal: 5,
      }}
    >
        <Input value={value} placeholder={placeholder} onChangeText={onChangeText} color="#00ff00"/>
    </View>
  )
}
